import { expect, Page } from '@playwright/test'
import { ENVI_CFG } from '../config/env'

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    protected async verifyURL(){
        await expect(this.page).toHaveURL(ENVI_CFG.baseURL);
        await expect(this.page).toHaveTitle(ENVI_CFG.baseTitle);
    }

    //protected async takeScreenshot(screenshotPath: string){
    //    const screenshot = await this.page.screenshot({ path: `./screenshots/${screenshotPath}.png` });
    //    await allure.attachment(screenshotPath, screenshot, 'image/png')
    //}

    // By Role and Name
    protected async verifyElementByRoleAndName(role: any, name: any){
        const element = this.page.getByRole(role, name);
        await element.scrollIntoViewIfNeeded();
        await expect(element).toBeVisible();
    }
    protected async clickElementByRoleAndName(role: any, option: any){
        await this.verifyElementByRoleAndName(role, { name: option });
        
        const element = this.page.getByRole(role, { name: option });
        await element.click();
    }
    protected async sendKeysByRoleAndName(role: any, option: any, value: string){
        await this.verifyElementByRoleAndName(role, { name: option });
        
        const element = this.page.getByRole(role, { name: option });
        await element.fill(value);
    }

    // By CSS Selector
    protected async verifyElement(locator: string){
        const element = this.page.locator(locator);
        await element.scrollIntoViewIfNeeded();
        await expect(element).toBeVisible();
    }
    protected async clickElement(locator: string){
        await this.verifyElement(locator);

        const element = this.page.locator(locator);
        await element.waitFor( { state: 'visible' });
        await element.click();
    }
    protected async sendKeys(locator: string, value: string){
        await this.verifyElement(locator);

        const element = this.page.locator(locator);
        await element.fill(value);

    }
    protected async verifyElementText(locator: string, expectedValue: string){
        await this.verifyElement(locator);

        const element = this.page.locator(locator);
        await expect(element).toHaveText(expectedValue);
    }
    protected async verifyAttributeValue(locator: string, attribute: string, expectedValue: number){
        await this.verifyElement(locator);

        const element = this.page.locator(locator);
        await expect(element).toHaveAttribute(attribute, expectedValue.toString());
    }
    /*protected async getElement(locator: string){
        return this.page.locator(locator);
    }*/
    protected async selectOption(locator: string, itemToSelect: string){
        await this.verifyElement(locator);
        await this.page.selectOption(locator, itemToSelect);
    }

    // iFrame
    protected async verifyElementInsideIframe(frame: string, locator: string){
        const element = this.page.frameLocator(frame).locator(locator);
        await element.scrollIntoViewIfNeeded();
        await expect(element).toBeVisible();
    }
    protected async sendKeysInsideIframe(frame: string, locator: string, value: string){
        await this.verifyElementInsideIframe(frame, locator);
        
        const element = this.page.frameLocator(frame).locator(locator);
        await element.fill(value);
    }
}