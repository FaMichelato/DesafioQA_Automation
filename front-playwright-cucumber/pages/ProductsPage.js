// pages/ProductsPage.js
export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartButton = '.inventory_item:first-child button';
  }

  async addFirstProductToCart() {
    await this.page.click(this.firstAddToCartButton);
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}
