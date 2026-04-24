import {test} from '../Fixtures/CustomFixtures.ts'


test('Verify Login functionality', async({loginPage, homePage})=>{
    await loginPage.login("standard_user", "secret_sauce");
    await homePage.addToCart();
    await homePage.gotoCart();
})