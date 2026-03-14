import { BasePage } from './base.page'
import { AccountPane_Locators as Locators} from '../utils/locators';

export class AccountPane extends BasePage {

    async goToSignUp(){
        await this.verifyElement(Locators.headerLogin);
        await this.clickElement(Locators.linkSignUp);
        await this.verifyElement(Locators.headerSignUp);
    }

    async goToLogin(){
        await this.verifyElement(Locators.headerSignUp);
        await this.clickElement(Locators.linkLogin);
        await this.verifyElement(Locators.headerLogin);
    }

    async userSignUp(email: string, password: string, confirm_password: string){
        await this.sendKeys(Locators.txtEmail, email);
        await this.sendKeys(Locators.txtPassword, password);
        await this.sendKeys(Locators.txtConfirmPassword, confirm_password);
        await this.clickElement(Locators.btnSignUp);
    }

    async userLogin(email: string, password: string){
        await this.sendKeys(Locators.txtEmail, email);
        await this.sendKeys(Locators.txtPassword, password);
        await this.clickElement(Locators.btnLogin);
    }
}