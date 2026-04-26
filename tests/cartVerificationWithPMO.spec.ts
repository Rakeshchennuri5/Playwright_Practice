import{expect, test} from '@playwright/test'
import { LogInPage } from '../pages/LogInPage'
import{HomePage} from '../pages/HomePage'
import {CartPage } from '../pages/CartPage'

test('Verification of Cart', async ({page})=>{
    const loginPageObj = new LogInPage(page)
    await loginPageObj.browserLaunch()
    await loginPageObj.login("standard_user", "secret_sauce");

    const homePage = new HomePage(page) 
    await expect(homePage.pageTitle).toHaveText('Swag Labs')
    await homePage.addToCart();
    await expect(homePage.carticon).toHaveText('1')
    await expect(homePage.removeButton).toBeVisible();
    await homePage.gotoCart();

    const cartPageObj = new CartPage(page)
    await cartPageObj.cartPage();
    //await expect(cartPageObj.checkOutPage).toBeVisible();
})
