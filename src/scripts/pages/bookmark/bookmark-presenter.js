export default class BookmarkPresenter {
  #view;
  #model;
 
  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }
 
  async initialGalleryAndMap() {
    this.#view.showStoriesListLoading();
 
    try {
      const listOfStories = await this.#model.getAllStories();
 
      const message = 'Berhasil mendapatkan daftar cerita tersimpan.';
      this.#view.populateBookmarkedStories(message, listOfStories);
    } catch (error) {
      console.error('initialGalleryAndMap: error:', error);
      this.#view.populateBookmarkedStoriesError(error.message);
    } finally {
      this.#view.hideStoriesListLoading();
    }
  }
}