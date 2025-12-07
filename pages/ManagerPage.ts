import { Page } from '@playwright/test';
import { Helpers } from '../utils/Helpers';

export class ManagerPage {
  helper: Helpers;
  constructor(private page: Page) { this.helper = new Helpers(page); }

  async goToAddCustomer() {
    await this.helper.waitAndClick('button:has-text("Add Customer")');
  }

  async goToOpenAccount() {
    await this.helper.waitAndClick('button:has-text("Open Account")');
  }

  async goToCustomers() {
    await this.helper.waitAndClick('button:has-text("Customers")');
  }
}
