import { expect, driver } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import profilePage from '../pageobjects/profile.page';

describe('Example application e2e demo', () => {
  it('Unable login with invalid account', async () => {
    await LoginPage.ensureLoginPageIsVisible();
    await LoginPage.loginWithEmailAndPassword('test_invalid@example.com', '123456');
    await LoginPage.ensureLoginErrorIsShown();
  });

  it('Should login with valid account', async () => {
    await LoginPage.ensureLoginPageIsVisible();
    await LoginPage.loginWithEmailAndPassword('test@example.com', 'Test@123');
    await HomePage.ensureHomePageIsVisible('John');
  });

  it('Should navigate successfully to profile', async () => {
    await HomePage.scrollToBottom();
    await HomePage.enterProfileScreen();
    await profilePage.ensureProfilePageIsVisible();

    await driver.pause(3000);
  });
});
