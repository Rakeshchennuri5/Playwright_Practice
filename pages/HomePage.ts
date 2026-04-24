import { Locator, Page } from "@playwright/test";


export class HomePage{

    readonly page : Page;
    readonly pageTitle : Locator;
    readonly addToCartButton : Locator;
    readonly carticon : Locator;
    readonly removeButton : Locator;

    constructor(page :Page){
        this.page = page;
        this.pageTitle = page.getByText('Swag Labs')
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
        this.carticon = page.locator('.shopping_cart_link')
        this.removeButton = page.locator('#remove-sauce-labs-backpack')
    }

    addToCart(){
        this.addToCartButton.click();
    }
    gotoCart(){
        this.carticon.click()
    }

}