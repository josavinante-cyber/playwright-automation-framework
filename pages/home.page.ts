import { BasePage } from './base.page'
import { HomePage_Locators as Locators} from '../utils/locators';

export class HomePage extends BasePage {

    async verifyUrl(){
        await this.verifyURL();
    }

    async openAccountPane() {
        await this.clickElement(Locators.btnUserMenu);

        await this.takeScreenshot(`${this.openAccountPane.name}.png`);
    }

    async verifyMessageDisplayed(message: string){
        let locator: string = "";

        switch (message){
            case "Sign Up": locator = Locators.pSignUpSuccess; break;
            case "Login": locator = Locators.pLoginSuccess; break;
            case "Sign Out": locator = Locators.pSignOutSuccess; break;
        }

        await this.verifyElement(locator);  

        await this.takeScreenshot(`${this.verifyMessageDisplayed.name}.png`);
    }

    async goToShopAll(){
        await this.clickElement(Locators.linkShopAll);

        await this.takeScreenshot(`${this.goToShopAll.name}.png`);
    }

    async searchProduct(itemToSearch: string){
        await this.clickElement(Locators.btnSearch);
        await this.sendKeys(Locators.txtSearchBar, itemToSearch);
        await this.clickElement(Locators.btnSearchBar);

        await this.takeScreenshot(`${this.searchProduct.name}.png`);
    }

    async goToProductDetails(product: string){
        await this.clickElementByRoleAndName('link', product);

        await this.takeScreenshot(`${this.goToProductDetails.name}.png`);
    }

}