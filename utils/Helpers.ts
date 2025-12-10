import { Page, expect } from '@playwright/test';
export class Helpers {
  page: Page;
  constructor(page: Page) { this.page = page; }

  async waitAndClick(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.click(selector);
  }

  async waitAndType(selector: string, text: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.fill(selector, text);
  }

  async selectByVisibleText(selectLocator: string, visibleText: string) {
    await this.page.waitForSelector(selectLocator);
    await this.page.selectOption(selectLocator, { label: visibleText });
  }

  async getText(selector: string) {
  const locator = this.page.locator(selector);
  await locator.waitFor({ state: 'visible' });
  return (await locator.textContent())?.trim() ?? '';
}


  async expectTextContains(selector: string, expected: string) {
    await this.page.waitForSelector(selector);
    await expect(this.page.locator(selector)).toContainText(expected);
  }

  async isVisible(selector: string) {
    return await this.page.locator(selector).isVisible();
  }

  async pause(ms: number) { await this.page.waitForTimeout(ms); }
}
