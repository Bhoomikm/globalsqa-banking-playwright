
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
