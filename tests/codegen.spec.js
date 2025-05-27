//npx playwright codegen https://google.com
//npx playwright test tests/codegen.spec.js
//lecture 23
import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Women' }).click();
  await page.getByRole('link', { name: 'Skirts & Palazzos' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'FIORRA Women Cotton Straight' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '34' }).click();
  await page1.getByText('ADD TO BAG').click();
  await page1.getByText('Bag', { exact: true }).click();
  await page1.getByRole('button', { name: 'PLACE ORDER' }).click();
});