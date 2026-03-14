import { BasePage } from './base.page'
import { CartPane_Locators as Locators } from '../utils/locators'

export class CartPane extends BasePage {
    
    async checkOut(){
        await this.clickElementByRoleAndName(Locators.btnCheckOut.role, Locators.btnCheckOut.name);
    }
}