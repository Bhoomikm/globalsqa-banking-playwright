// import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CustomerLoginPage } from '../pages/CustomerLoginPage';
import { AccountPage } from '../pages/AccountPage';

// test('Negative: withdraw more than balance shows error', async ({ page }) => {
//   const home = new HomePage(page);
//   await home.open();
//   await home.goToCustomerLogin();

//   const custLogin = new CustomerLoginPage(page);
//   await custLogin.loginAs('Harry Potter');

//   const account = new AccountPage(page);
//   const balance = await account.getBalance();

//   // attempt to withdraw much larger amount
//   await account.withdraw(balance + 1000);

//   // verify error text says 'Transaction Failed' or 'Transaction failed'
//   await expect(page.locator('.error')).toContainText(/Transaction Failed|Transaction failed|Transaction/);
// });
import { test, expect } from '../src/fixtures/testFixtures';

test('Negative: withdraw more than balance shows error', async ({ home, customerLoginPage, accountPage }) => {
  await home.open();
  await home.goToCustomerLogin();

  await customerLoginPage.loginAs('Harry Potter');

  const balance = await accountPage.getBalance();

  await accountPage.withdraw(balance + 1000);
  const error = accountPage.helper.page.locator('.error');

  await expect(accountPage.helper.page.locator('.error')).toContainText(/Transaction Failed|Transaction failed|Transaction/);
});
