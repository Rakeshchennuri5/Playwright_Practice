import { test as base } from '@playwright/test'
import { LogInPage } from '../pages/logInPage'
import { LogoutPage } from '../pages/logoutPage'

type MyFixtures = {
  loginLogout: void
}

export const test = base.extend<MyFixtures>({
  loginLogout: async ({ page }, use) => {

    const loginPage = new LogInPage(page)
    await loginPage.browserLaunch()
    await loginPage.login('standard_user', 'secret_sauce')

    await use()

    const logoutPage = new LogoutPage(page)
    await logoutPage.logOut()
  }
})

export { expect } from '@playwright/test'