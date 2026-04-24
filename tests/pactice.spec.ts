import { test } from "@playwright/test";
import { chromium, firefox } from "playwright";

test("alert", async ({ page }) => {
    page.on('dialog', async dialog =>{
        await dialog.accept();
    })

})

