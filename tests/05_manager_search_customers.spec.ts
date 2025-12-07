// import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ManagerPage } from '../pages/ManagerPage';

import { test, expect } from '../src/fixtures/testFixtures';

test('Manager views customers list and search', async ({ home, managerPage, page }) => {
  await home.open();
  await home.goToManagerLogin();

  await managerPage.goToCustomers();

  const searchInput = 'input[placeholder="Search Customer"]';
  await page.fill(searchInput, 'Harry');
  await expect(page.locator('table')).toContainText('Harry');
});
