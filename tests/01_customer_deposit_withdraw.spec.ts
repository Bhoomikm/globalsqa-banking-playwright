import { test, expect } from '../src/fixtures/testFixtures';

test('Customer deposit and withdraw flow - verify balance and transactions', async ({ home, customerLoginPage, accountPage, page }) => {
  await home.open();
  await home.goToCustomerLogin();

  await customerLoginPage.loginAs('Harry Potter');

  const initial = await accountPage.getBalance();

  await accountPage.deposit(100);
  const afterDeposit = await accountPage.getBalance();
  expect(afterDeposit).toBe(initial + 100);

  await accountPage.withdraw(50);
  const afterWithdraw = await accountPage.getBalance();
  expect(afterWithdraw).toBe(afterDeposit + 50);

  await accountPage.goToTransactions();
  await expect(page.locator('table tbody tr')).not.toBe(0);
});

