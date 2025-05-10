import * as StoryAPI from "../../data/api";
import HomePresenter from "./home-presenter";
import {
  generateStoryItemTemplate,
  generateStoriesListEmptyTemplate,
  generateStoriesListErrorTemplate,
  generateLoaderAbsoluteTemplate,
} from "../../templates";

export default class HomePage {
  #presenter = null;

  async render() {
    return `
      <section class="content-container">
        <h1 class="section-title">Bagikan Cerita kamu!</h1>
        <div class="stories-list__map__container">
          <div id="map" class="stories-list__map"></div>
          <div id="map-loading-container"></div>
        </div>
        <br><br>
        <div class="stories-list__container">
          <div id="stories-list"></div>
          <div id="stories-list-loading-container"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: StoryAPI,
    });

    await this.#presenter.initialGalleryAndMap();
  }

  initialMap(stories) {
    const Stadia_Dark = L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    );

    const Esri_WorldStreetMap = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",
      }
    );
    const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    const map = L.map("map", {
      center: ["-2.5489", "118.0149"],
      zoom: 5,
      layers: [osm],
    });

    var baseMaps = {
      "Open Street Map": osm,
      "Esri World": Esri_WorldStreetMap,
      "Stadia Dark": Stadia_Dark,
    };
    L.control.layers(baseMaps).addTo(map);

    stories.forEach((story) => {
      if (story.lat !== null || story.lon !== null) {
        const marker = L.marker([story.lat, story.lon], {
          draggable: false,
        }).addTo(map);

        marker.bindPopup(`${story.name}'s story.`);
      }

      console.log(story.lat);
    });
  }

  populateStoriesList(message, stories) {
    if (stories.length <= 0) {
      this.populateStoriesListEmpty();
      return;
    }

    const html = stories.reduce((accumulator, story) => {
      return accumulator.concat(
        generateStoryItemTemplate({
          ...story,
        })
      );
    }, "");

    document.getElementById("stories-list").innerHTML = `
      <div class="stories-list">${html}</div>
    `;
  }

  populateStoriesListEmpty() {
    document.getElementById("stories-list").innerHTML =
      generateStoriesListEmptyTemplate();
  }

  populateStoriesListError(message) {
    document.getElementById("stories-list").innerHTML =
      generateStoriesListErrorTemplate(message);
  }

  showMapLoading() {
    document.getElementById("map-loading-container").innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideMapLoading() {
    document.getElementById("map-loading-container").innerHTML = "";
  }

  showLoading() {
    document.getElementById("stories-list-loading-container").innerHTML =
      generateLoaderAbsoluteTemplate();
  }

  hideLoading() {
    document.getElementById("stories-list-loading-container").innerHTML = "";
  }
}
