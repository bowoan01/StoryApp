import {
  generateLoaderAbsoluteTemplate,
  generateStoryDetailErrorTemplate,
  generateStoryDetailTemplate,
  generateSaveStoryButtonTemplate,
  generateRemoveStoryButtonTemplate,
} from "../../templates";
import StoryDetailPresenter from "./story-detail-presenter";
import { parseActivePathname } from "../../routes/url-parser";
import * as StoryAPI from "../../data/api";
import Database from '../../data/database';

export default class StoryDetailPage {
  #presenter = null;

  async render() {
    return `
      <section class="content-container">
        <div class="story-detail__container">
          <div id="story-detail" class="story-detail"></div>
          <div id="story-detail-loading-container"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new StoryDetailPresenter(parseActivePathname().id, {
      view: this,
      apiModel: StoryAPI,
      dbModel: Database
    });

    this.#presenter.showStoryDetail();
  }

  async populateStoryDetailAndInitialMap(message, story) {
    document.getElementById("story-detail").innerHTML =
      generateStoryDetailTemplate({
        name: story.name,
        description: story.description,
        photoUrl: story.photoUrl,
        createdAt: story.createdAt,
        lat: story.lat,
        lon: story.lon,
      });

    await this.#presenter.showStoryDetailMap(story.lat, story.lon, story.name);
    
    this.#presenter.showSaveButton();
  }

  populateStoryDetailError(message) {
    document.getElementById("story-detail").innerHTML =
      generateStoryDetailErrorTemplate(message);
  }

  async initialMap(lat, lon, name) {
    const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    const map = L.map("map", {
      center: [lat, lon],
      zoom: 7,
      layers: [osm],
    });

    const marker = L.marker([lat, lon], {
      draggable: false,
    }).addTo(map);

    marker.bindPopup(`${name}'s story.`).openPopup();
  }

  showStoryDetailLoading() {
    document.getElementById("story-detail-loading-container").innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideStoryDetailLoading() {
    document.getElementById("story-detail-loading-container").innerHTML = "";
  }

  showMapLoading() {
    document.getElementById("map-loading-container").innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById("map-loading-container").innerHTML = "";
  }

  renderSaveButton() {
    document.getElementById('save-actions-container').innerHTML =
      generateSaveStoryButtonTemplate();

    document.getElementById('story-detail-save').addEventListener('click', async () => {
      await this.#presenter.saveStory();
      await this.#presenter.showSaveButton();
    });
  }

  renderRemoveButton() {
    document.getElementById('save-actions-container').innerHTML =
      generateRemoveStoryButtonTemplate();

    document.getElementById('story-detail-remove').addEventListener('click', async () => {
      await this.#presenter.removeStory();
      await this.#presenter.showSaveButton();
    });
  }

  saveToBookmarkSuccessfully(message) {
    console.log(message);
  }
  saveToBookmarkFailed(message) {
    alert(message);
  }

  removeFromBookmarkSuccessfully(message) {
    console.log(message);
  }
  removeFromBookmarkFailed(message) {
    alert(message);
  }
}
