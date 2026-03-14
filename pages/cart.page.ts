import { BasePage } from './base.page'
import { CartPage_Locators as Locators } from '../utils/locators'

export class CartPage extends BasePage {

    async fillOutShippingAddress(country: string, firstName: string, lastName: string, street: string,
                                 apartment: string, city: string, state: string, postalCode: string, phone: string){
        await this.selectOption(Locators.selCountry, country);
        await this.sendKeys(Locators.txtFirstName, firstName);
        await this.sendKeys(Locators.txtLastName, lastName);
        await this.sendKeys(Locators.txtStreet, street);
        await this.sendKeys(Locators.txtApartment, apartment);
        await this.sendKeys(Locators.txtCity, city);
        await this.selectOption(Locators.selState, state);
        await this.sendKeys(Locators.txtPostalCode, postalCode);
        await this.sendKeys(Locators.txtPhone, phone);
    }

    async saveAndContinue(){
        await this.clickElementByRoleAndName(Locators.btnSaveAndContinue.role, Locators.btnSaveAndContinue.name);
    }

    async selectDeliveryMethod(deliveryMethod: string){
        let locator : string = "";
        switch (deliveryMethod){
            case "Standard": locator = Locators.optStandard; break;
            case "Premium": locator = Locators.optPremium; break;
            case "Next Day": locator = Locators.optNextDay; break;
        }

        await this.clickElement(locator);
    }

    async fillOutCardDetails(cardNumber: string, cardExpirationDate: string, cardCVC: string){
        await this.sendKeysInsideIframe(Locators.divFrame, Locators.txtCardNumber, cardNumber);
        await this.sendKeysInsideIframe(Locators.divFrame, Locators.txtExpirationDate, cardExpirationDate);
        await this.sendKeysInsideIframe(Locators.divFrame, Locators.txtSecurityCode, cardCVC);
    }

    async payNow(){
        await this.clickElement(Locators.btnPayNow);
    }

    async verifyConfirmation(firstName: string){
        await this.verifyElement(Locators.lblOrderNumber);
        await this.verifyElement('h4:has-text("Thanks '+ firstName +' for your order!")');
    }
}