import { $, driver } from '@wdio/globals';
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  getElementById(id: string) {
    return $(`~${id}`);
  }

  async setValue(input: any, data: string) {
    await input.clearValue();
    for (let i = 0; i < data.length; i++) {
      await driver.keys(data[i]);
    }
  }
}
