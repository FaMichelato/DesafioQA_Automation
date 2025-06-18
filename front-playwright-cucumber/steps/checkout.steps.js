import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { ProductsPage } from '../pages/ProductsPage.js'; 


let page;
let loginPage;
let productsPage;
let checkoutPage;

Given('que o usuário está logado na aplicação', async function () {
  page = this.page;
  loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

Given('acessou a tela de produtos', async function () {
  productsPage = new ProductsPage(page);
  await expect(page).toHaveURL(/.*inventory/);
});

Given('adicionou um produto ao carrinho', async function () {
  await productsPage.addFirstProductToCart();
});

When('acessar o carrinho', async function () {
  await productsPage.goToCart();
});

When('iniciar o checkout', async function () {
  checkoutPage = new CheckoutPage(page);
  await checkoutPage.startCheckout();
});

When('preencher os dados do cliente com {string} e {string}', async function (nome, cargo) {
  await checkoutPage.fillCustomerInfo(nome, cargo, '12345');
});

When('finalizar a compra', async function () {
  await checkoutPage.finishCheckout();
});

Then('o sistema deve exibir a mensagem de confirmação da compra', async function () {
  const message = await checkoutPage.getConfirmationMessage();
  expect(message).toContain('Thank you for your order!');
});
