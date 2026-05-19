import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

import { CartPage } from '../pages/CartPage';



test('check cart page', async ({page})=>{


        const loginPage = new LoginPage(page);
        const cart  = new CartPage(page);

        await loginPage.goto()
        await loginPage.login('standard_user','secret_sauce')

        await expect(page).toHaveURL(/inventory/)

        await cart.addBackpack()
        await cart.addFleeceJacket()
        await cart.openCart()

        await cart.removeBackPack();

        await expect(cart.getCartItems()).toHaveCount(1);
       

        
   
})