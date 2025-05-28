//add product to bag myntra example
//find products from list
import {test,expect} from '@playwright/test';

test.only('select_dynamic_product', async ({ page }) => {
    const productname='Embroidered Kurta Set';
  await page.goto("https://www.myntra.com/women-ethnic-wear");

  const products = page.locator(".product-base");
  const count = await products.count();

  //console.log(`Total products found: ${count}`);

  for (let i = 0; i < count; i++) {
    const name = await products.nth(i).locator(".product-productMetaInfo .product-product").textContent();
    if(name==productname)
    {
        const [popup] = await Promise.all([
            page.waitForEvent('popup'),
            products.nth(i).click() // this triggers the new tab
        ]);
        await popup.getByRole('button', { name: 'XL',exact: true }).click()
        await popup.getByText('ADD TO BAG', { exact: true }).click();
        await popup.getByText('Bag', { exact: true }).click();
        
        // Check if the product is visible in cart
        const visible = await popup.locator(`a:has-text("${productname}")`).isVisible;
        expect(visible).toBeTruthy();
        
        await popup.getByRole('button', { name: 'PLACE ORDER' }).click();
        //await popup.pause();
        console.log(visible);
        break;
    }
    
    //console.log(`Product ${i + 1}: ${name?.trim()}`);
  }
});