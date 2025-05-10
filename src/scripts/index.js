import '../styles/styles.css';
import '../styles/responsives.css';
import { registerServiceWorker } from './utils';
import App from './pages/app';
import Camera from './utils/camera';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    navigationDrawer: document.querySelector('#navigation-drawer'),
    drawerButton: document.querySelector('#drawer-button'),
    content: document.querySelector('#main-content'),
    skipLinkButton: document.getElementById('skip-link'),
  });
  await app.renderPage();

  await registerServiceWorker();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();

    Camera.stopAllStreams();
  });
});
