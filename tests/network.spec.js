import {test,expect,request} from '@playwright/test';

test('security test report',async({page})=>{
    //login
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("bhaktipawar00@gmail.com");
    await page.locator("#userPassword").fill("Bhakti@6789");
    await page.locator("#login").click();

    await page.waitForLoadState('networkidle');
    await page.locator("button[routerLink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route=>route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68491e4681a20695306fb683'})
    )
    await page.locator("button:has-text('view')").first().click();
    await page.pause();

});

//abprt images/css
test.only('abort',async({page})=>{
    //login
    await page.route('**/*.{png,jpg,jpeg,webp,gif,svg}',route=>route.abort());
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#userEmail").fill("bhaktipawar00@gmail.com");
    await page.locator("#userPassword").fill("Bhakti@6789");
    await page.locator("#login").click();
    
    await page.waitForLoadState('networkidle');
    
    await page.pause();

});