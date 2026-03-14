export const HomePage_Locators = {
    // Search
    btnSearch: 'button[id="open-search"]',
    txtSearchBar: 'input[id="q"]',
    btnSearchBar: '//input[@id="q"]/preceding-sibling::button',
    // Right Side Menus
    btnUserMenu: '*[aria-label="Open account panel"]',
    btnWishlist: 'button[id="wishlist-icon"]',
    linkCart: 'a[id="cart-pane-link"]',
    // Product Menus
    linkShopAll: 'a[data-title="shop all"]:visible',
    // Display Messages
    pSignUpSuccess: 'p:has-text("Welcome! You have signed up successfully.")',
    pSignOutSuccess: 'p:has-text("Signed out successfully.")',
    pLoginSuccess: 'p:has-text("Signed in successfully.")'
}

export const AccountPane_Locators = {
    // Headers
    headerLogin: 'h2:has-text("Login")',
    headerSignUp: 'h2:has-text("Sign Up")',
    // Login/Signup Fields
    txtEmail: 'input[id="user_email"]',
    txtPassword: 'input[id="user_password"]',
    txtConfirmPassword: 'input[id="user_password_confirmation"]',
    tickRememberMe: 'input[id="user_remember_me"]',
    btnLogin: 'input[id="login-button"]',
    btnSignUp: 'input[value="Sign Up"]',
    // Links
    linkSignUp: 'a[href="/user/sign_up"]',
    linkLogin: 'a[href="/user/sign_in"]',
    linkForgetPassword: 'a[href="/user/password/new"]'
}

export const AccountPage_Locators = {
    // Side Menus
    btnLogout: 'button:has-text("Log out")'
}

export const ProductsPage_Locators = {
    // Product Details
    lblProductName: '//div[@data-editor-name="Name"]/child::h1',
    lblProductPrice: '//div[@data-editor-name="Price"]/descendant::p',
    lblProductColor: '//div[@id="product-variant-picker"]/descendant::span',
    lblProductQuantity: 'input[id="quantity"]',

    // Button
    btnAddtoCart: { role: 'button', name: 'Add To Cart' }
}

export const CartPane_Locators = {
    // Cart List Items
    listCartItems: 'ul#line-items li.cart-line-item',
    lblCartItemName: '//a[@class="font-semibold text-text"]',
    // CheckOut
    btnCheckOut: { role: 'link', name: 'Checkout' },
}

export const CartPage_Locators = {
    // Shipping Address
    selCountry: 'select[id="order_ship_address_attributes_country_id"]',
    txtFirstName: 'input[id="order_ship_address_attributes_firstname"]',
    txtLastName: 'input[id="order_ship_address_attributes_lastname"]',
    txtStreet: 'input[id="order_ship_address_attributes_address1"]',
    txtApartment: 'input[id="order_ship_address_attributes_address2"]',
    txtCity: 'input[id="order_ship_address_attributes_city"]',
    selState: 'select[id="order_ship_address_attributes_state_id"]',
    txtPostalCode: 'input[id="order_ship_address_attributes_zipcode"]',
    txtPhone: 'input[id="order_ship_address_attributes_phone"]',
    btnSaveAndContinue: { role: 'button', name: 'Save and Continue' },
    // Delivery Options
    optStandard: '//li[@data-checkout-delivery-target="shippingRate"]/descendant::label[contains(text(),"Standard")]',
    optPremium: '//li[@data-checkout-delivery-target="shippingRate"]/descendant::label[contains(text(),"Premium")]',
    optNextDay: '//li[@data-checkout-delivery-target="shippingRate"]/descendant::label[contains(text(),"Next Day")]',
    // Credit Card
    divFrame: 'iframe[src*="elements-inner-accessory-target"]',
    txtCardNumber: 'input[id="payment-numberInput"]',
    txtExpirationDate: 'input[id="payment-expiryInput"]',
    txtSecurityCode: 'input[id="payment-cvcInput"]',
    // Pay Now
    btnPayNow: 'button[id="checkout-payment-submit"]',
    // Order confirmation
    lblOrderNumber: '//p[contains(text(),"Order")]'
}