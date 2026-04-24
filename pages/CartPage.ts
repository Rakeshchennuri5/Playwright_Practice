import{expect, Locator, Page} from '@playwright/test'

export class CartPage{

    readonly page : Page;
    readonly pageRefTitle : Locator;
    readonly cartProductLink : Locator;
    readonly checkoutButton : Locator;
    readonly checkOutPage : Locator;

    constructor(page : Page){
        this.page = page;
        this.pageRefTitle = page.getByText('Your Cart')
        this.cartProductLink = page.getByText('Sauce Labs Backpack')
        this.checkoutButton = page.getByRole('button' , {name :'Checkout'})
        this.checkOutPage = page.getByText('Checkout: Your Information')
    }

    async cartPage(){
        await expect(this.pageRefTitle).toBeVisible()
        await expect(this.cartProductLink).toBeVisible();
        await this.checkoutButton.click();
    }

}