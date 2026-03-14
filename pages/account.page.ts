import { BasePage } from './base.page'
import { AccountPage_Locators as Locators} from '../utils/locators';

export class AccountPage extends BasePage {

    async signOut(){
        await this.clickElement(Locators.btnLogout);
        
        await this.takeScreenshot(`${this.signOut.name}.png`);
    }
}