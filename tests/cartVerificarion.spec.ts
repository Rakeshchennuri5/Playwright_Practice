import { test, expect } from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name : 'Login'}).click();
})

 test("successfullCartjourney", async ({page})=>{
    await expect(page.locator('.app_logo')).toBeVisible();
    await page.getByText('Sauce Labs Backpack').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
    await page.getByRole('button',{name :'Add to cart'}).click();
    //await expect(page.getByRole('button',{name:'Remove'})).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByRole('link',{name :'Sauce Labs Backpack'})).toBeVisible();
    await page.locator('#remove-sauce-labs-backpack').click();
 })

 test("verifyCart", async({page, browserName})=>{
   // test.skip(browserName === "chromium")
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByRole('link',{name :'Sauce Labs Backpack'})).not.toBeVisible();
 })