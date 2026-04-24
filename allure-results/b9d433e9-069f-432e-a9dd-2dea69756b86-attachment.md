# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: envSetup.spec.ts >> env test
- Location: tests\envSetup.spec.ts:3:5

# Error details

```
Error: page.goto: url: expected string, got undefined
```

# Test source

```ts
  1 | import {test} from "@playwright/test";
  2 | 
  3 | test("env test", async ({page})=>{
> 4 |     await page.goto(process.env.URL as string);
    |                ^ Error: page.goto: url: expected string, got undefined
  5 |     console.log("URL is " + process.env.URL)
  6 | })
```