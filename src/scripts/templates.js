import { showFormattedDate } from "./utils";

export function generateStoryItemTemplate({
  id,
  name,
  description,
  photoUrl,
  lon,
  lat,
  createdAt,
}) {
  return `
      <div tabindex="0" class="story-item" data-storyid="${id}">
        <img class="story-item__image" src="${photoUrl}" alt="${name}">
        <div class="story-item__body">
          <div class="story-item__main">
            <h2 id="story-title" class="story-item__title">${name}</h2>
            <div class="story-item__more-info">
              <div class="story-item__createdat">
                <i class="fas fa-calendar-alt"></i> ${showFormattedDate(
                  createdAt,
                  "id-ID"
                )}
              </div>
              <div class="story-item__location">
                <i class="fas fa-map"></i> ${lon}, ${lat}
              </div>
            </div>
          </div>
          <div id="story-description" class="story-item__description">
            ${description}
          </div>
          <a class="btn story-item__read-more" href="#/stories/${id}">
            Selengkapnya <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
}

export function generateStoriesListEmptyTemplate() {
  return `
      <div id="stories-list-empty" class="stories-list__empty">
        <h2>Belum ada cerita yang anda simpan!</h2>
        <p>Cobalah untuk menyimpan satu cerita.</p>
      </div>
    `;
}

export function generateStoriesListErrorTemplate(message) {
  return `
      <div id="stories-list-error" class="stories-list__error">
        <h2>Terjadi kesalahan pengambilan daftar cerita</h2>
        <p>${
          message ? message : "Gunakan jaringan lain atau laporkan error ini."
        }</p>
      </div>
    `;
}

export function generateLoaderTemplate() {
  return `
      <div class="loader"></div>
    `;
}

export function generateLoaderAbsoluteTemplate() {
  return `
      <div class="loader loader-absolute"></div>
    `;
}

export function generateAuthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="new-story-button" class="btn new-story-button" href="#/new">Bagikan Ceritamu <i class="fas fa-plus"></i></a></li>
    <li><a id="logout-button" class="logout-button" href="#/logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
  `;
}

export function generateMainNavigationListTemplate() {
  return `
    <li><a id="bookmark-button" class="bookmark-button" href="#/bookmark">Cerita Tersimpan</a></li>
  `;
}

export function generateUnauthenticatedNavigationListTemplate() {
  return `
    <li id="push-notification-tools" class="push-notification-tools"></li>
    <li><a id="login-button" href="#/login">Login</a></li>
    <li><a id="register-button" href="#/register">Register</a></li>
  `;
}

export function generateStoryDetailImageTemplate(imageUrl = null, alt = "") {
  if (!imageUrl) {
    return `
      <img class="story-detail__image" src="images/placeholder-image.jpg" alt="Placeholder Image">
    `;
  }

  return `
    <img class="story-detail__image" src="${imageUrl}" alt="${alt}">
  `;
}

export function generateStoryDetailErrorTemplate(message) {
  return `
    <div id="stories-detail-error" class="stories-detail__error">
      <h2>Terjadi kesalahan pengambilan detail cerita</h2>
      <p>${
        message ? message : "Gunakan jaringan lain atau laporkan error ini."
      }</p>
    </div>
  `;
}

export function generateStoryDetailTemplate({
  name,
  description,
  photoUrl,
  createdAt,
  lat,
  lon,
}) {
  const createdAtFormatted = showFormattedDate(createdAt, "id-ID");
  const imageHtml = generateStoryDetailImageTemplate(photoUrl, name);

  return `
    <div class="story-detail__header">
      <h1 id="title" class="story-detail__title">${name}</h1>

      <div class="story-detail__more-info">
        <div class="story-detail__more-info__inline">
          <div id="createdat" class="story-detail__createdat" data-value="${createdAtFormatted}"><i class="fas fa-calendar-alt"></i></div>
        </div>
        <div class="story-detail__more-info__inline">
          <div id="location-latitude" class="story-detail__location__latitude" data-value="${lat}">Latitude:</div>
          <div id="location-longitude" class="story-detail__location__longitude" data-value="${lon}">Longitude:</div>
        </div>
      </div>
    </div>

      <div class="story-detail__images__container">
        <div id="images" class="story-detail__images">${imageHtml}</div>
      </div>

    <div class="container">
      <div class="story-detail__body">
        <div class="story-detail__body__description__container">
          <h2 class="story-detail__description__title">Deskripsi Story</h2>
          <div id="description" class="story-detail__description__body">
            ${description}
          </div>
        </div>
        <div class="story-detail__body__map__container">
          <h2 class="story-detail__map__title">Peta Lokasi Story</h2>
          <div class="story-detail__map__container">
            <div id="map" class="story-detail__map"></div>
            <div id="map-loading-container"></div>
          </div>
        </div>

        <hr>
  
        <div class="story-detail__body__actions__container">
          <h2>Aksi</h2>
          <div class="story-detail__actions__buttons">
            <div id="save-actions-container"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function generateSubscribeButtonTemplate() {
  return `
    <button id="subscribe-button" class="btn subscribe-button">
      Subscribe <i class="fas fa-bell"></i>
    </button>
  `;
}

export function generateUnsubscribeButtonTemplate() {
  return `
    <button id="unsubscribe-button" class="btn unsubscribe-button">
      Unsubscribe <i class="fas fa-bell-slash"></i>
    </button>
  `;
}

export function generateSaveStoryButtonTemplate() {
  return `
    <button id="story-detail-save" class="btn btn-transparent">
      Simpan cerita <i class="far fa-bookmark"></i>
    </button>
  `;
}

export function generateRemoveStoryButtonTemplate() {
  return `
    <button id="story-detail-remove" class="btn btn-transparent">
      Buang cerita <i class="fas fa-bookmark"></i>
    </button>
  `;
}
