import { test } from "@playwright/test"

test("Practice Test 1", async ({ page }) => {
    console.log("Paractice 1 execution started")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Paractice 1 execution Ended")
})

test.describe("Group of Tests", async () => {

    test("Practice Test 2", async ({ page }) => {
        console.log("Paractice 2 execution started")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Paractice 2 execution Ended")
    })

    test("Practice Test 3", async ({ page }) => {
        console.log("Paractice 3 execution started")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Paractice 3 execution Ended")
    })

    test("Practice Test 4", async ({ page }) => {
        console.log("Paractice 4 execution started")
        await page.goto("https://www.saucedemo.com/")
        console.log(await page.title())
        console.log("Paractice 4 execution Ended")
    })
})

test("Practice Test 5", async ({ page }) => {
    console.log("Paractice 5 execution started")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Paractice 5 execution Ended")
})

test.beforeEach("before Test",async()=>{
    console.log("Executing beforeEach Block")
    })

test("Practice Test 6", async ({ page }) => {
    console.log("Paractice 6 execution started")
    await page.goto("https://www.saucedemo.com/")
    console.log(await page.title())
    console.log("Paractice 6 execution Ended")
})