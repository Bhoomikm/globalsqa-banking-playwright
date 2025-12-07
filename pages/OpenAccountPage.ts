import { Page } from '@playwright/test';
import { Helpers } from '../utils/Helpers';

export class OpenAccountPage {
    helper: Helpers;
    customerSelect = '#userSelect';
    currencySelect = '#currency';
    processBtn = 'button[type="submit"]';

    constructor(private page: Page) { this.helper = new Helpers(page); }

    async openAccount(customerName: string, currency = 'Dollar') {
        await this.helper.selectByVisibleText(this.customerSelect, customerName);
        await this.helper.selectByVisibleText(this.currencySelect, currency);
        await this.helper.waitAndClick(this.processBtn);
        // accept alert
        // await this.page.waitForEvent('dialog').then(d => d.accept());
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();   // or dialog.dismiss();
        });

        // // trigger the action that causes the dialog
        // await this.page.click('#deleteBtn');

    }
}
