import{test as base} from '@playwright/test'
import { LogInPage } from '../pages/LogInPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

type MyFixtures = {
    loginPage : LogInPage
    homePage : HomePage
    cartPage: CartPage
}

export const test = base.extend<MyFixtures>({
    loginPage: async({page}, use)=>{
        const loginPage = new LogInPage(page)
        await loginPage.browserLaunch();
        await use(loginPage);
    },

    homePage: async({page},use)=>{
        const homePage = new HomePage(page)
        await use(homePage)
    },

    cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page)
    await use(cartPage)
  }
})