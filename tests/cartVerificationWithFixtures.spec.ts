import { expect } from '@playwright/test'
import { test } from '../Fixtures/CustomFixtures'
import LoginTestdata from '../TestData/LoginTestData.json'

//test.describe('full flow using fixtures: login -> add to cart -> verify -> checkout', () => {

  for (const data of LoginTestdata)
  test(`Cart Verification , ${data.userName}`, async ({ loginPage, homePage, cartPage }) => {

    await loginPage.login(data.userName, data.password)

    await expect(homePage.pageTitle).toHaveText('Swag Labs')
    await homePage.addToCart()
    await expect(homePage.carticon).toHaveText('1')
    await expect(homePage.removeButton).toBeVisible()
    await homePage.gotoCart()

    await cartPage.cartPage()
    await expect(cartPage.cartProductLink).not.toBeVisible()
  })

  
  // test('user 2', async ({ loginPage, page }) => {
  //   await loginPage.login('standard_user', 'secret_sauce')
  //   await page.locator('.shopping_cart_link').click();
  //   await expect(page.getByText('Sauce Labs Backpack')).not.toBeVisible();
  // })
//}) 