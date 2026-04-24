import{expect, test} from "@playwright/test"
import { beforeEach } from "node:test";

test("fill Test", async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000})
    for(let i = 0; i<=4; i++){
        await page.locator("#APjFqb").press('ArrowDown')
    }
    await page.locator("#APjFqb").press('Enter')
})  

test.beforeEach("Launching Browser", async ({page})=>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
})

test("Radio Button Handelings", async({page})=>{
    await page.locator("#male").check();
    await page.locator("#female").check();
    await expect(page.locator("#male")).not.toBeChecked();
})

test("Check Box Handlelings", async({page})=>{
    await page.locator(".Automation").check();
    await page.locator(".Performance").check();
    if(await page.locator(".Automation").isChecked()){
        console.log("Automate is checked")
        await page.locator(".Automation").uncheck();
        console.log("Automate is Un Checked")
    }
})

test("dropdown Handlelings", async({page})=>{
    await page.locator("#testingDropdown").selectOption({label : 'Automation Testing'})
    console.log("Automation Testing is selected")
    await page.locator("#testingDropdown").selectOption('Performance Testing')
    console.log('Performance Testing is selected')
    await page.locator("#testingDropdown").selectOption({value:"Manual"})
    console.log("Manual Testing is selected")
})