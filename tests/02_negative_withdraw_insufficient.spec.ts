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
