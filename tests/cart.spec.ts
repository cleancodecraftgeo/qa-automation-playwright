import {test, expect} from '@playwright/test';

test('check cart page', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await page.fill("#user-name","standard_user");
    await page.fill("#password","secret_sauce");

    await page.click('#login-button');

     await expect(page).toHaveURL(/inventory/)

    
        await page.click("#add-to-cart-sauce-labs-backpack");
        
        //go to cart

        await page.click('.shopping_cart_link');
        //assert
        
        const cartItem = page.locator(".cart_item");

        await expect(cartItem).toHaveCount(1);
   
})