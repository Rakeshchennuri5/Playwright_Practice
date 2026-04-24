import{Locator, Page} from '@playwright/test'

export class LogoutPage{
    readonly page :Page;
    readonly menuButton : Locator
    readonly logOutButton : Locator

    constructor(page : Page){
        this.page = page;
        this.menuButton = page.getByRole('button', { name: 'Open Menu' })
        this.logOutButton = page.locator('[data-test="logout-sidebar-link"]')
    }
    
    async logOut(){
        await this.menuButton.click();
        await this.logOutButton.click();
    }
}
