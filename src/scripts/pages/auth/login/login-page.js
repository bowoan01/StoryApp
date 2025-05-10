import LoginPresenter from './login-presenter';
import * as CityCareAPI from '../../../data/api';
import * as AuthModel from '../../../utils/auth';

export default class LoginPage {
  #presenter = null;

  async render() {
    return `
      <section class="content-container">
        <h1>Login</h1>

        <form id="login-form" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="contoh: nama@email.com" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required placeholder="Masukkan password Anda" />
          </div>
          <div class="form-buttons login-form__form-buttons">
            <div id="submit-button-container">
              <button class="btn" type="submit">Masuk</button>
            </div>
            <p class="login-form__do-not-have-account">Belum punya akun? <a href="#/register">Daftar</a></p>
          </div>
        </form>

      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new LoginPresenter({
      view: this,
      model: CityCareAPI,
      authModel: AuthModel,
    });

    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };
      await this.#presenter.getLogin(data);
    });
  }

  loginSuccessfully(message) {
    console.log(message);

    location.hash = '/';
  }

  loginFailed(message) {
    alert(message);
  }

  showSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Masuk
      </button>
    `;
  }

  hideSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="btn" type="submit">Masuk</button>
    `;
  }
}
