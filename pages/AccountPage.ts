import { Page } from '@playwright/test';
import { Helpers } from '../utils/Helpers';

export class AccountPage {
    helper: Helpers;
    logoutBtn = 'button:has-text("Logout")';
    depositTab = 'button[ng-click="deposit()"]';
    withdrawTab = 'button[ng-click="withdrawl()"]';
    amountInput = 'input[ng-model="amount"]';
    depositBtn = 'button[type="submit"]';
    withdrawbtn ='button:has-text("Withdraw")';
    message = '.error';
    balanceLocator = "//div[@class='center' and @ng-hide='noAccount']/strong[2]";
    transactionsBtn = 'button:has-text("Transactions")';
    resetBtn = 'button:has-text("Reset")';
    tablerows= 'table tbody tr';

    constructor(private page: Page) { this.helper = new Helpers(page); }

    async deposit(amount: number) {
        await this.helper.waitAndClick(this.depositTab);
        await this.helper.waitAndType(this.amountInput, String(amount));
        await this.helper.waitAndClick(this.depositBtn);
        // confirm success message text contains 'Deposit Successful'
        await this.helper.expectTextContains('.error', 'Deposit Successful');
    }

    async withdraw(amount: number) {
        await this.helper.waitAndClick(this.withdrawTab);
        await this.helper.waitAndType(this.amountInput, String(amount));
        await this.helper.waitAndClick(this.withdrawbtn);
        // success or insufficient funds show in '.error'
    }

    // pages/AccountPage.ts
    async getBalance() {
        const txt = await this.helper.getText(this.balanceLocator);
        // balance is just a number
        return Number(txt);
    }


    async goToTransactions() {
        await this.helper.waitAndClick(this.transactionsBtn);
        const count: number = await this.page.locator(this.tablerows).count();
        return Number(count)

    }
}
