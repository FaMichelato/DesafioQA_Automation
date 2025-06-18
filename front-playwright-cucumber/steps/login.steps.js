import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';



let loginPage;

Given('que o usuário está na página de login', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.goto(); 

});

When('preencher o nome de usuário e senha corretamente', async function () {
  await loginPage.login('standard_user', 'secret_sauce');
});

When('clicar no botão de login', async function () {
  // já incluso no método login
});

Then('o sistema deve redirecionar para a página de produtos', async function () {
  await expect(this.page).toHaveURL(/.*inventory/);
});

When('preencher o nome de usuário como {string} e senha como {string}', async function (username, password) {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(username, password); 
});



Then('o sistema deve exibir uma mensagem de erro de autenticação', async function () {
  const loginPage = new LoginPage(this.page);
  const errorMessage = await loginPage.getErrorMessage();
  expect(errorMessage).toContain('Epic sadface: Username and password do not match');
});
