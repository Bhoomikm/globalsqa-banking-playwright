// import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ManagerPage } from '../pages/ManagerPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';
import { OpenAccountPage } from '../pages/OpenAccountPage';

// test('Manager creates customer and opens account', async ({ page }) => {
//   const home = new HomePage(page);
//   await home.open();
//   await home.goToManagerLogin();

//   const manager = new ManagerPage(page);
//   await manager.goToAddCustomer();

//   const add = new AddCustomerPage(page);
//   const fname = 'TestFirst' + Date.now();
//   const lname = 'TestLast';
//   await add.addCustomer(fname, lname, '560001');

//   // open account for the new customer
//   await manager.goToOpenAccount();
//   const open = new OpenAccountPage(page);
//   const customerName = `${fname} ${lname}`;
//   await open.openAccount(customerName, 'Dollar');

//   // validate by navigating to Customers and searching (simple check)
//   await manager.goToCustomers();
//   // ensure the new customer row exists
//   await expect(page.locator('table')).toContainText(fname);
// });
import { test, expect } from '../src/fixtures/testFixtures';

test('Manager creates customer and opens account', async ({ home, managerPage, addCustomerPage, openAccountPage, page }) => {
  await home.open();
  await home.goToManagerLogin();

  await managerPage.goToAddCustomer();

  const fname = 'TestFirst' + Date.now();
  const lname = 'TestLast';
  await addCustomerPage.addCustomer(fname, lname, '560001');

  // open account
  await managerPage.goToOpenAccount();
  const customerName = `${fname} ${lname}`;
  await openAccountPage.openAccount(customerName, 'Dollar');

  // verify presence in customers list
  await managerPage.goToCustomers();
  await expect(page.locator('table')).toContainText(fname);
});
