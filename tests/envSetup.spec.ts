import {test} from "@playwright/test";

test("env test", async ({page})=>{
    await page.goto(process.env.URL as string);
    console.log("URL is " + process.env.URL)
})