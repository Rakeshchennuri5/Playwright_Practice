import{expect, test} from "@playwright/test"

test("New Page handelings",async({context})=>{
    const page = await context.newPage();
    await page.goto("https://testpages.eviltester.com/pages/navigation/windows-names/");

    const pagePromis1 = context.waitForEvent("page");
    await expect(page.getByRole('heading', { name: 'Windows Links' })).toBeVisible();
    await page.locator("#gobasicajax").click();
    const page1 = await pagePromis1;
    await page1.waitForLoadState();
    await expect(page1.getByRole('heading', { name: 'Linked Page with Window Name' })).toBeVisible();
    
    const pagePromis2 = context.waitForEvent("page");
    await page1.getByRole('link', { name: 'Learn More', exact: true }).click();
    const page2 = await pagePromis2;
    await page2.waitForLoadState();
    await expect(page2.getByRole('heading', { name: 'Alan Richardson (Consultant, Developer, Tester, Digital Marketer, Programmer)', exact: true })).toBeVisible();

    await page2.close();
    await page.bringToFront();
    await page.locator('#gononame').click()

    await page1.bringToFront();
    await page1.waitForLoadState()
    await page1.getByRole('button',{name:'Click to reveal current window name'}).click();
})
