import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  console.log('Browser and page opened');
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
    console.log('Browser closed');
  }
});
