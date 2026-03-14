import { BasePage } from './base.page'
import { ProductsPage_Locators as Locators} from '../utils/locators';

export class ProductsPage extends BasePage {

    async verifyProductDetails(detail: string, expectedValue: string){
        let locator: string = "";
        
        switch (detail){
            case "name": locator = Locators.lblProductName; break;
            case "price": locator = Locators.lblProductPrice; break;
            case "color": locator = Locators.lblProductColor; break;
        }
    
        await this.verifyElementText(locator, expectedValue);

        await this.takeScreenshot(`${this.verifyProductDetails.name}.png`);

    }

    async verifyProductQuantity(expectedValue: number){
        await this.verifyAttributeValue(Locators.lblProductQuantity, "value", expectedValue);
        
        await this.takeScreenshot(`${this.verifyProductQuantity.name}.png`);
    }

    async addToCart(){
        await this.clickElementByRoleAndName(Locators.btnAddtoCart.role, Locators.btnAddtoCart.name);
        
        await this.takeScreenshot(`${this.addToCart.name}.png`);
    }
}