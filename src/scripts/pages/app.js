import routes from "../routes/routes";
import { getActiveRoute } from "../routes/url-parser";
import {
  generateAuthenticatedNavigationListTemplate,
  generateMainNavigationListTemplate,
  generateUnauthenticatedNavigationListTemplate,
  generateSubscribeButtonTemplate,
  generateUnsubscribeButtonTemplate,
} from "../templates";
import { setupSkipToContent, transitionHelper, isServiceWorkerAvailable } from "../utils";
import { isCurrentPushSubscriptionAvailable, subscribe, unsubscribe } from '../utils/notification-helper';
import { getAccessToken, getLogout } from "../utils/auth";

class App {
  #content = null;
  #drawerButton = null;
  #navigationDrawer = null;
  #skipLinkButton = null;

  constructor({ navigationDrawer, drawerButton, content, skipLinkButton }) {
    this.#content = content;
    this.#drawerButton = drawerButton;
    this.#navigationDrawer = navigationDrawer;
    this.#skipLinkButton = skipLinkButton;

    this.#init();
  }

  #init() {
    this.#skipLinkButton.addEventListener("click", () => {
      console.log('clicked');
      this.#content.focus();
    });
    this.#setupDrawer();
  }

  #setupDrawer() {
    this.#drawerButton.addEventListener("click", () => {
      this.#navigationDrawer.classList.toggle("open");
    });

    document.body.addEventListener("click", (event) => {
      const isTargetInsideDrawer = this.#navigationDrawer.contains(
        event.target
      );
      const isTargetInsideButton = this.#drawerButton.contains(event.target);

      if (!(isTargetInsideDrawer || isTargetInsideButton)) {
        this.#navigationDrawer.classList.remove("open");
      }

      this.#navigationDrawer.querySelectorAll("a").forEach((link) => {
        if (link.contains(event.target)) {
          this.#navigationDrawer.classList.remove("open");
        }
      });
    });
  }

  #setupNavigationList() {
    const isLogin = !!getAccessToken();
    const navListMain =
      this.#navigationDrawer.children.namedItem("navlist-main");
    const navList = this.#navigationDrawer.children.namedItem("navlist");

    if (!isLogin) {
      navListMain.innerHTML = "";
      navList.innerHTML = generateUnauthenticatedNavigationListTemplate();
      return;
    }

    navListMain.innerHTML = generateMainNavigationListTemplate();
    navList.innerHTML = generateAuthenticatedNavigationListTemplate();

    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (confirm("Apakah Anda yakin ingin keluar?")) {
        getLogout();

        location.hash = "/login";
      }
    });
  }

  async #setupPushNotification() {
    const pushNotificationTools = document.getElementById('push-notification-tools');
    const isSubscribed = await isCurrentPushSubscriptionAvailable();

    if (isSubscribed) {
      pushNotificationTools.innerHTML = generateUnsubscribeButtonTemplate();

      document.getElementById('unsubscribe-button').addEventListener('click', () => {
        unsubscribe().finally(() => {
          this.#setupPushNotification();
        });
      });
      return;
    }

    pushNotificationTools.innerHTML = generateSubscribeButtonTemplate();
    document.getElementById('subscribe-button').addEventListener('click', () => {
       subscribe().finally(() => {
        this.#setupPushNotification();
      });
    });
  }

  async renderPage() {
    const url = getActiveRoute();
    let route = routes[url];

    if (!route) {
      route = routes['/not-found'];
    }

    console.log(route);
    const page = route();

    const transition = transitionHelper({
      updateDOM: async () => {
        this.#content.innerHTML = await page.render();
        await page.afterRender();
      },
    });

    transition.ready.catch(console.error);
    transition.updateCallbackDone.then(() => {
      scrollTo({ top: 0, behavior: "instant" });
      this.#setupNavigationList();

      if (isServiceWorkerAvailable()) {
        this.#setupPushNotification();
      }
    });
  }
}

export default App;
