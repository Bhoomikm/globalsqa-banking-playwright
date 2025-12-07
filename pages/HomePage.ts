import { Page } from '@playwright/test';
import { Helpers } from '../utils/Helpers';

export class HomePage {
  helper: Helpers;
  constructor(private page: Page) { this.helper = new Helpers(page); }

  async open() {
    await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  }

  async goToManagerLogin() {
    await this.helper.waitAndClick('button:has-text("Bank Manager Login")');
  }

  async goToCustomerLogin() {
    await this.helper.waitAndClick('button:has-text("Customer Login")');
  }
}
