import{test, expect} from '../Fixtures/HooksFixture'

test('successfullCartjourney', async ({ loginLogout, page }) => {
    await expect(page.locator('.app_logo')).toBeVisible();
    await page.getByText('Sauce Labs Backpack').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
    await page.getByRole('button', { name: 'Add to cart' }).click();
    //await expect(page.getByRole('button',{name:'Remove'})).toBeVisible();
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toBeVisible();
    await page.locator('#remove-sauce-labs-backpack').click();
})

test("verifyCart", async({page, browserName, loginLogout})=>{
   // test.skip(browserName === "chromium")
    await page.locator('.shopping_cart_link').click();
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible();
 })