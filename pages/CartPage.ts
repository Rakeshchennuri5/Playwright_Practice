import{expect, Locator, Page} from '@playwright/test'

export class CartPage{

    readonly page : Page;
    readonly pageRefTitle : Locator;
    readonly cartProductLink : Locator;
    readonly removeCart : Locator;
    //readonly checkOutPage : Locator;
    readonly menuButton : Locator
    readonly logOutButton : Locator

    constructor(page : Page){
        this.page = page;
        this.pageRefTitle = page.getByText('Your Cart')
        this.cartProductLink = page.getByText('Sauce Labs Backpack')
        this.removeCart = page.locator('#remove-sauce-labs-backpack')
       // this.checkOutPage = page.getByText('Checkout: Your Information')
       this.menuButton = page.getByRole('button', { name: 'Open Menu' })
       this.logOutButton = page.locator('[data-test="logout-sidebar-link"]')
    }

    async cartPage(){
        await expect(this.pageRefTitle).toBeVisible()
        await expect(this.cartProductLink).toBeVisible();
        await this.removeCart.click();
        await this.menuButton.click();
        await this.logOutButton.click();
    }

}