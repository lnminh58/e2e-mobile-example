import { expect, driver } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class loginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get emailInput() {
    return this.getElementById('input_email');
  }

  get passwordInput() {
    return this.getElementById('input_password');
  }

  get submitButton() {
    return this.getElementById('btn_submit');
  }

  get welcomeText() {
    return this.getElementById('txt_welcome_caption');
  }

  get errorText() {
    return this.getElementById('txt_login_error');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async ensureLoginPageIsVisible() {
    const welcomeText = await this.welcomeText;
    await expect(welcomeText).toHaveText('Glad to see you!');
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    await this.setValue(this.emailInput, email);
    await this.setValue(this.passwordInput, password);

    await this.submitButton.click();
  }

  async ensureLoginErrorIsShown() {
    const errorText = await this.errorText;
    await expect(errorText).toHaveText('Unable to login');
  }
}

export default new loginPage();
