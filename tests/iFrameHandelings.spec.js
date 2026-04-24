import{test} from "@playwright/test"

test("iFrame handling with Nmae", async({page})=>{
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    const w3c = page.frame({url:'https://www.w3schools.com/html/default.asp'})
    await w3c.getByRole('button', { name: 'Button to open search field' }).click();
    await w3c.getByRole('textbox', { name: 'Search field' }).click();
    await w3c.getByRole('textbox', { name: 'Search field' }).fill('test cod automate');
})

test("iFrame handling with Locater", async({page})=>{
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    const w3c2 = page.frameLocator("[title='W3Schools HTML Tutorial']")
    await w3c2.getByRole('button', { name: 'Button to open search field' }).click();
    await w3c2.getByRole('textbox', { name: 'Search field' }).click();
    await w3c2.getByRole('textbox', { name: 'Search field' }).fill('test cod automate');
})