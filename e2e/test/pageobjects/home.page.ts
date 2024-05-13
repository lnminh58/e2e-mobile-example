import { expect, driver } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get greetingText() {
    return this.getElementById('txt_greeting');
  }

  get profileButton() {
    return this.getElementById('btn_enter_profile');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async ensureHomePageIsVisible(username: string) {
    const greetingText = await this.greetingText;
    await expect(greetingText).toHaveText(`Hi ${username}, Welcome back!`);
  }

  async scrollToBottom() {
    await driver.action('pointer').move(150, 500).down().move(150, 200).up().perform();
    await driver.pause(1000);

    await expect(this.profileButton).toBeDisplayed();
  }

  async enterProfileScreen() {
    await this.profileButton.click();
  }
}

export default new HomePage();
