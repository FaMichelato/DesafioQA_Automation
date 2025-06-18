// support/custom-world.js
import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from 'playwright';

export class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async openBrowser() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
