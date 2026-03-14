import { ENVI_CFG } from "../config/env";
import { test } from "../fixtures/test.fixture"
import { UserFaker } from "../utils/user.faker";

const testProduct = {
    name: "Blue Rucksack",
    price: "$59.99",
    color: "Color: Blue",
    quantity: 1
};

test("User can complete checkout successfully", async ({
    homePage, accountPane, accountPage, productsPage, cartPane, cartPage
}) => {
    test.setTimeout(ENVI_CFG.timeout);

    // Create a Fake Test User
    const user = UserFaker.createUser();
    
    // Open Home Page and Open Account Page
    await homePage.verifyUrl();
    await homePage.openAccountPane();

    // Go to Sign Up and Register
    await accountPane.goToSignUp();
    await accountPane.userSignUp(user.email, user.password, user.password);
    await homePage.verifyMessageDisplayed("Sign Up");

    // Sign out
    await homePage.openAccountPane();
    await accountPage.signOut();
    await homePage.verifyMessageDisplayed("Sign Out");

    // Login
    await homePage.openAccountPane();
    await accountPane.userLogin(user.email, user.password);
    await homePage.verifyMessageDisplayed("Login");

    // Browse / Search for Product
    await homePage.goToShopAll();
    await homePage.searchProduct(testProduct.name);
    await homePage.goToProductDetails(testProduct.name);

    // Verify Details
    await productsPage.verifyProductDetails("name", testProduct.name);
    await productsPage.verifyProductDetails("price", testProduct.price);
    await productsPage.verifyProductDetails("color", testProduct.color);
    await productsPage.verifyProductQuantity(testProduct.quantity);

    // Add to Cart
    await productsPage.addToCart();

    // Proceed to Checkout
    await cartPane.checkOut();
    await cartPage.fillOutShippingAddress(user.country, user.firstName, user.lastName, user.street, user.apartment,
                                          user.city, user.state, user.zipcode, user.phone);
    await cartPage.saveAndContinue();
    await cartPage.selectDeliveryMethod("Next Day");
    await cartPage.saveAndContinue();
    
    await cartPage.fillOutCardDetails(user.cardNumber, user.expiryDate, user.securityCode);
    await cartPage.payNow();

    // Verify Order Success
    await cartPage.verifyConfirmation(user.firstName);

});