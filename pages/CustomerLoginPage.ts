import { Page } from '@playwright/test';
import { Helpers } from '../utils/Helpers';

export class CustomerLoginPage {
  helper: Helpers;
  customerSelect = '#userSelect';
  loginBtn = 'button:has-text("Login")';

  constructor(private page: Page) { this.helper = new Helpers(page); }

  async loginAs(customerName: string) {
    await this.helper.selectByVisibleText(this.customerSelect, customerName);
    await this.helper.waitAndClick(this.loginBtn);
  }
}
