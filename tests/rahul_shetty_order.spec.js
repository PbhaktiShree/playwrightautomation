import {test,expect} from '@playwright/test';

// test('register',async ({page})=>{
//     await page.goto('https://rahulshettyacademy.com/client/');
//     await page.getByText('Register', { exact: true }).click();
//     await page.locator("#firstName").fill("bhakti");    
//     await page.locator("#lastName").fill("Pawar");
//     await page.locator("#userEmail").fill("bhaktipawar00@gmail.com");
//     await page.locator("#userEmail").fill("bhaktipawar00@gmail.com");
//     await page.locator("#userMobile").fill("9876543210")
//     await page.selectOption('select[formcontrolname="occupation"]', { value: '3: Engineer' });
//     await page.locator('input[formcontrolname="gender"][value="Female"]').check();
//     await page.locator("#userPassword").fill("Bhakti@6789");
//     await page.locator("#confirmPassword").fill("Bhakti@6789");
//     await page.locator('input[type="checkbox"]').check();
//     await page.locator("#login").click();

//     await page.pause();

// });

test('login',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("bhaktipawar00@gmail.com");
    await page.locator("#userPassword").fill("Bhakti@6789");
    await page.locator("#login").click();

    const productName = 'ZARA COAT 3';
    await page.locator(".card-body b").first().waitFor();
    const titles=await page.locator(".card-body b").allTextContents();
    
    const products = page.locator(".card-body");
    const count=await products.count();
    //console.log(count);
    for(let i=0;i<count;i++)
    {
        console.log(products.nth(i).locator("b").textContent())
        if(await products.nth(i).locator("b").textContent()===productName)
        {
            console.log("product found at "+i);
            await products.nth(i).locator("text=Add To Cart").click();
            
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();
    
    await page.locator("[placeholder*='Select Country']").pressSequentially("Indi")
    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await page.locator(".action__submit").click();

    //get order id
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();
    const rows=await page.locator("tbody tr");
    //console.log(await rows.count());
    for(let i=0;i<=await rows.count();i++)
    {
        const rowsOrdeId=await rows.nth(i).locator('th').textContent();
        if(orderId.includes(rowsOrdeId))
        {
            await rows.nth(i).locator("button").first().click();
            await page.pause();
            break
        }
    }
    await page.pause();
    // const cards = await page.locator('#products .card');
    // console.log('count=' + await cards.count());
    //await page.pause();
    

});

// test("order_product",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/client/dashboard/dash")
//     const cards = await page.locator('#products .card');
//     console.log('count=' + await cards.count());
// });