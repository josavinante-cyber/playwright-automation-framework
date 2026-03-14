import { BasePage } from './base.page'
import { HomePage_Locators as Locators} from '../utils/locators';

export class HomePage extends BasePage {

    async verifyUrl(){
        await this.verifyURL();
    }

    async openAccountPane() {
        await this.clickElement(Locators.btnUserMenu);
    }

    async verifyMessageDisplayed(message: string){
        let locator: string = "";

        switch (message){
            case "Sign Up": locator = Locators.pSignUpSuccess; break;
            case "Login": locator = Locators.pLoginSuccess; break;
            case "Sign Out": locator = Locators.pSignOutSuccess; break;
        }

        await this.verifyElement(locator);  
    }

    async goToShopAll(){
        await this.clickElement(Locators.linkShopAll);
    }

    async searchProduct(itemToSearch: string){
        await this.clickElement(Locators.btnSearch);
        await this.sendKeys(Locators.txtSearchBar, itemToSearch);
        await this.clickElement(Locators.btnSearchBar);
    }

    async goToProductDetails(product: string){
        await this.clickElementByRoleAndName('link', product);
    }

}