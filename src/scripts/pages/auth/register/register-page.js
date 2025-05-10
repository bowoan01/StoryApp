import RegisterPresenter from './register-presenter';
import * as CityCareAPI from '../../../data/api';

export default class RegisterPage {
  #presenter = null;

  async render() {
    return `
      <section class="content-container">
        <h1>Daftar Akun</h1>

        <form id="register-form" class="auth-form">
          <div class="form-group">
            <label for="name">Nama</label>
            <input type="text" id="name" name="name" required placeholder="masukan nama anda" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required  placeholder="contoh: nama@email.com" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required  placeholder="Masukkan password Anda" />
          </div>
          <div class="form-buttons register-form__form-buttons">
            <div id="submit-button-container">
              <button class="btn" type="submit">Daftar akun</button>
            </div>
            <p class="register-form__already-have-account">Sudah punya akun? <a href="#/login">Masuk</a></p>
          </div>
        </form>

      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new RegisterPresenter({
      view: this,
      model: CityCareAPI,
    });

    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('register-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };
      await this.#presenter.getRegistered(data);
    });
  }

  registeredSuccessfully(message) {
    console.log(message);

    location.hash = '/login';
  }

  registeredFailed(message) {
    alert(message);
  }

  showSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Daftar akun
      </button>
    `;
  }

  hideSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="btn" type="submit">Daftar akun</button>
    `;
  }
}
