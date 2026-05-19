import { Locator, Page } from "@playwright/test";




export class CartPage{

    constructor(private page:Page) {}
        
    async addBackpack(){
        await this.page.click("#add-to-cart-sauce-labs-backpack");
    }
    
    async addFleeceJacket(){
            await this.page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

    }

    async openCart(){
                await this.page.click('.shopping_cart_link');

    }

    async removeBackPack(){
        await this.page.click('[data-test="remove-sauce-labs-backpack"]')
    }

    getCartItems():Locator{
        return this.page.locator(".cart_item");
    }

      async getCartCount(): Promise<number> {
    return await this.getCartItems().count();
         }

}