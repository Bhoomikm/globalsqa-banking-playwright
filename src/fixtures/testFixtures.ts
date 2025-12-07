// src/fixtures/testFixtures.ts
import { test as base, Page, expect as baseExpect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { ManagerPage } from '../../pages/ManagerPage';
import { AddCustomerPage } from '../../pages/AddCustomerPage';
import { OpenAccountPage } from '../../pages/OpenAccountPage';
import { CustomerLoginPage } from '../../pages/CustomerLoginPage';
import { AccountPage } from '../../pages/AccountPage';

// define fixture types
type MyFixtures = {
  home: HomePage;
  managerPage: ManagerPage;
  addCustomerPage: AddCustomerPage;
  openAccountPage: OpenAccountPage;
  customerLoginPage: CustomerLoginPage;
  accountPage: AccountPage;
  page: Page; // re-export Playwright page if needed
};

export const test = base.extend<MyFixtures>({
  // re-expose the Playwright page fixture (already available) to typing
  page: async ({ page }, use) => {
    await use(page);
  },

  // instantiate Page Objects for each test using the Playwright page
  home: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  managerPage: async ({ page }, use) => {
    await use(new ManagerPage(page));
  },

  addCustomerPage: async ({ page }, use) => {
    await use(new AddCustomerPage(page));
  },

  openAccountPage: async ({ page }, use) => {
    await use(new OpenAccountPage(page));
  },

  customerLoginPage: async ({ page }, use) => {
    await use(new CustomerLoginPage(page));
  },

  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  }
});

export const expect = baseExpect;
