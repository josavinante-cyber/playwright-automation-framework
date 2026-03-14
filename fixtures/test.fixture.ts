import { test as base } from '@playwright/test'
import { HomePage } from '../pages/home.page'
import { AccountPane } from '../pages/account.pane';
import { AccountPage } from '../pages/account.page';
import { ProductsPage } from '../pages/products.page';
import { CartPane } from '../pages/cart.pane'
import { CartPage } from '../pages/cart.page';
import { ENVI_CFG } from '../config/env';

type Fixtures = {
    homePage: HomePage;
    accountPane: AccountPane;
    accountPage: AccountPage;
    productsPage: ProductsPage;
    cartPane: CartPane;
    cartPage: CartPage;
};

export const test = base.extend<Fixtures>({

    page: async({ page }, use) => {

        // Before Test
        await page.goto(ENVI_CFG.baseURL);

        await use(page);

        // After Test
        await page.close();
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    accountPane: async ({ page }, use) => {
        await use(new AccountPane(page));
    },

    accountPage: async({ page }, use) => {
        await use(new AccountPage(page));
    },

    productsPage: async({ page }, use)=> {
        await use(new ProductsPage(page));
    },
    
    cartPane: async({ page }, use)=> {
        await use(new CartPane(page));
    },

    cartPage: async({ page }, use)=> {
        await use(new CartPage(page))
    }
});

export { expect } from "@playwright/test"