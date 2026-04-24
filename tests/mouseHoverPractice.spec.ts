import { expect, test } from '@playwright/test';

test('mouse hover practice', async ({ browser }) => {

  const context = await browser.newContext();

  await context.grantPermissions([], { origin: 'https://www.ssbeauty.in' });
  // empty array = deny all permissions for this site

  const page = await context.newPage();

  await page.goto('https://www.ssbeauty.in/', {
    waitUntil: 'domcontentloaded'
  });

  await page.getByText('Categories', { exact: true }).hover({force: true});
  await page.getByRole('button', { name: 'level-2 image Hair' }).hover();
  await page.getByText('Shampoo & Conditioners').click();
  await expect(page.getByText('Shampoo & Conditioners')).toBeVisible();
});
