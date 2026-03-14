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
    }

    async verifyProductQuantity(expectedValue: number){
        await this.verifyAttributeValue(Locators.lblProductQuantity, "value", expectedValue);
    }

    async addToCart(){
        await this.clickElementByRoleAndName(Locators.btnAddtoCart.role, Locators.btnAddtoCart.name);
    }
}