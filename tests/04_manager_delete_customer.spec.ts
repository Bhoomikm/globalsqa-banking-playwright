// import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ManagerPage } from '../pages/ManagerPage';
import { AddCustomerPage } from '../pages/AddCustomerPage';

// test('Manager deletes a created customer', async ({ page }) => {
//   const home = new HomePage(page);
//   await home.open();
//   await home.goToManagerLogin();

//   const manager = new ManagerPage(page);
//   await manager.goToAddCustomer();

//   const add = new AddCustomerPage(page);
//   const fname = 'DeleteFirst' + Date.now();
//   const lname = 'DeleteLast';
//   await add.addCustomer(fname, lname, '560002');

//   await manager.goToCustomers();

//   // find the row that contains the customer and click Delete (assuming the site has a delete button per row)
//   const row = page.locator('table tbody tr').filter({ hasText: fname });
//   await expect(row).toHaveCount(1);
//   // delete button text is 'Delete' on the demo — adjust if needed
//   await row.locator('button:has-text("Delete")').click();

//   // verify row removed
//   await expect(page.locator('table')).not.toContainText(fname);
// });
import { test, expect } from '../src/fixtures/testFixtures';

test('Manager deletes a created customer', async ({ home, managerPage, addCustomerPage, page }) => {
  await home.open();
  await home.goToManagerLogin();

  await managerPage.goToAddCustomer();

  const fname = 'DeleteFirst' + Date.now();
  const lname = 'DeleteLast';
  await addCustomerPage.addCustomer(fname, lname, '560002');

  await managerPage.goToCustomers();

  const row = page.locator('table tbody tr').filter({ hasText: fname });
  await expect(row).toHaveCount(1);
  await row.locator('button:has-text("Delete")').click();
  await expect(page.locator('table')).not.toContainText(fname);
});
