import { test, expect } from '@playwright/test';

test.describe('Cart tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    await page.fill('[data-test="username"]', "standard_user");
    await page.fill('[data-test="password"]', "secret_sauce");

    await page.click('[data-test="login-button"]');
  });

  test('remove cart items', async ({ page }) => {

    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

    await page.click('[data-test="shopping-cart-link"]');

    await page.click('[data-test="remove-sauce-labs-backpack"]');

    const cartItems = page.locator('.cart_item');

    await expect(cartItems).toHaveCount(1);
  });

 
     test.afterEach(async ({ page }, testInfo) => {
        console.log(`${testInfo.title} -> ${testInfo.status}`);
   if (testInfo.status !== 'passed') {
    await page.screenshot({ path: `screenshots/${testInfo.title}.png` });
   }
 });


});