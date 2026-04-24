# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fillAndPress.spec.ts >> dropdown Handlelings
- Location: tests\fillAndPress.spec.ts:33:5

# Error details

```
Test timeout of 15000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | import{expect, test} from "@playwright/test"
  2  | import { beforeEach } from "node:test";
  3  | 
  4  | test("fill Test", async({page})=>{
  5  |     await page.goto("https://www.google.com/");
  6  |     await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000})
  7  |     for(let i = 0; i<=4; i++){
  8  |         await page.locator("#APjFqb").press('ArrowDown')
  9  |     }
  10 |     await page.locator("#APjFqb").press('Enter')
  11 | })  
  12 | 
> 13 | test.beforeEach("Launching Browser", async ({page})=>{
     |      ^ Test timeout of 15000ms exceeded while running "beforeEach" hook.
  14 |     await page.goto("https://artoftesting.com/samplesiteforselenium");
  15 | })
  16 | 
  17 | test("Radio Button Handelings", async({page})=>{
  18 |     await page.locator("#male").check();
  19 |     await page.locator("#female").check();
  20 |     await expect(page.locator("#male")).not.toBeChecked();
  21 | })
  22 | 
  23 | test("Check Box Handlelings", async({page})=>{
  24 |     await page.locator(".Automation").check();
  25 |     await page.locator(".Performance").check();
  26 |     if(await page.locator(".Automation").isChecked()){
  27 |         console.log("Automate is checked")
  28 |         await page.locator(".Automation").uncheck();
  29 |         console.log("Automate is Un Checked")
  30 |     }
  31 | })
  32 | 
  33 | test("dropdown Handlelings", async({page})=>{
  34 |     await page.locator("#testingDropdown").selectOption({label : 'Automation Testing'})
  35 |     console.log("Automation Testing is selected")
  36 |     await page.locator("#testingDropdown").selectOption('Performance Testing')
  37 |     console.log('Performance Testing is selected')
  38 |     await page.locator("#testingDropdown").selectOption({value:"Manual"})
  39 |     console.log("Manual Testing is selected")
  40 | })
```