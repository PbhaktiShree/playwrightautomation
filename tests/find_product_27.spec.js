//add product to bag myntra example
//find products from list
import {test,expect} from '@playwright/test';

test.only('select_dynamic_product', async ({ page }) => {
    const productname='Embroidered Unstitched Dress Material';
  await page.goto("https://www.myntra.com/women-ethnic-wear");

  const products = page.locator(".product-base");
  const count = await products.count();

  console.log(`Total products found: ${count}`);

  for (let i = 0; i < count; i++) {
    const name = await products.nth(i).locator(".product-productMetaInfo .product-product").textContent();
    if(name==productname)
    {
        const [popup] = await Promise.all([
            page.waitForEvent('popup'),
            products.nth(i).click() // this triggers the new tab
        ]);
        await popup.getByText('ADD TO BAG', { exact: true }).click();
        await popup.waitForLoadState('load');
        // Check if the product is visible in cart
        const isVisible = await popup.locator(`a:has-text("${productname}")`).isVisible;
        expect(isVisible).toBeTruthy();
        console.log("Product found in cart!");
        break;
    }
    
    //console.log(`Product ${i + 1}: ${name?.trim()}`);
  }
});