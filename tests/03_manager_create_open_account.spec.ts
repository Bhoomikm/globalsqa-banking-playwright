
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
