import { expect, driver } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
  /**
   * define selectors using getter methods
   */
  get titleText() {
    return this.getElementById('Profile Screen');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  async ensureProfilePageIsVisible() {
    const titleText = await this.titleText;
    await expect(titleText).toBeDisplayed();
  }
}

export default new ProfilePage();
