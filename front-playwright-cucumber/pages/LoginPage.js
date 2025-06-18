export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return await this.page.textContent(this.errorMessage);
  }
}
