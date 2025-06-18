// support/world.js
import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

class CustomWorld {
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
    await this.page?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
