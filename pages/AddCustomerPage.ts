import { Page } from '@playwright/test';
import { Helpers } from '../utils/Helpers';

export class AddCustomerPage {
    helper: Helpers;
    constructor(private page: Page) { this.helper = new Helpers(page); }

    firstName = 'input[ng-model="fName"]';
    lastName = 'input[ng-model="lName"]';
    postCode = 'input[ng-model="postCd"]';
    addBtn = 'button[type="submit"]';

    async addCustomer(fname: string, lname: string, pcode: string) {
        await this.helper.waitAndType(this.firstName, fname);
        await this.helper.waitAndType(this.lastName, lname);
        await this.helper.waitAndType(this.postCode, pcode);
        await this.helper.waitAndClick(this.addBtn);
        // alert appears — accept it
        this.page.on('dialog', async (dialog) => {
            await dialog.accept();   // or dialog.dismiss();
        });


        // await this.page.waitForEvent('dialog').then(d => d.accept());
    }
}
