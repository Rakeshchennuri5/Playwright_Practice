import{test, expect} from "@playwright/test"

test("Alert dailog Handelings", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", dialog =>{
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toEqual("I am a JS Alert");
        dialog.accept();
    })
    await page.getByRole('button',{name : "Click for JS Alert"}).click()
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert")
})

test("Confirm Dailogue Hangling", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog", dialog =>{
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toEqual('I am a JS Confirm');
    dialog.dismiss()
    })

    await page.getByRole("button", {name : 'Click for JS Confirm'}).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
})

test("Prompt Dailog Handling", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on("dialog",async dailog =>{
        expect(dailog.type()).toBe("prompt");
        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await page.getByRole('button', { name: 'Click for JS Alert' }).click();
        await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
        expect(dailog.message()).toEqual('I am a JS prompt')
        await dailog.accept("Prompt allert Testing");
    })
    await page.getByRole("button", {name : 'Click for JS Prompt '}).click();
})


