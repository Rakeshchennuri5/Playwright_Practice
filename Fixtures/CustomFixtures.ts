import{test as base} from '@playwright/test'
import { LogInPage } from '../pages/logInPage'
import { HomePage } from '../pages/HomePage'

type MyFixtures = {
    loginPage : LogInPage
    homePage : HomePage
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
    }
})