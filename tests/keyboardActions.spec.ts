import { test } from '@playwright/test';

test('keyboard actions', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const userName = page.getByPlaceholder('Current Address');
  await userName.click();
  await userName.fill('Rakesh@123');

  for (let i = 0; i < 4; i++) {
    await userName.press('ArrowLeft');
  }

  await userName.type('123');

  await userName.press('Meta+A');
  await userName.press('Meta+X');

  const firstName = page.getByPlaceholder('Full Name');
  await firstName.click();
  await firstName.press('Meta+V');

  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageUp');
});