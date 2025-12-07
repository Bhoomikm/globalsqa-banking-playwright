// import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CustomerLoginPage } from '../pages/CustomerLoginPage';
import { AccountPage } from '../pages/AccountPage';

// test.setTimeout(60000)
// test('Customer deposit and withdraw flow - verify balance and transactions', async ({ page }) => {
//   const home = new HomePage(page);
//   await home.open();
//   await home.goToCustomerLogin();


//   const custLogin = new CustomerLoginPage(page);
//   // choose a customer that exists, e.g., "Harry Potter" or the one you created
//   await custLogin.loginAs('Ron Weasly');

  
//   const account = new AccountPage(page);
//   // starting balance
//   const initial = await account.getBalance();
//   console.log(initial)

//   // deposit
//   await account.deposit(100);
//   const afterDeposit = await account.getBalance();
//   console.log(afterDeposit)

//   expect(afterDeposit).toBe(initial + 100);

//   // withdraw
//   await account.withdraw(50);
//   const afterWithdraw = await account.getBalance();
//   console.log(afterWithdraw)

//   expect(afterWithdraw).toBe(150);

//   // transactions page should list entries
//   const result = await account.goToTransactions();
// //   expect(result).toBeGreaterThan(0);
  
  
// });
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
  expect(afterWithdraw).toBe(afterWithdraw-50);

  await accountPage.goToTransactions();
//   await expect(page.locator('table tbody tr')).toHaveCountGreaterThan(0);
});

