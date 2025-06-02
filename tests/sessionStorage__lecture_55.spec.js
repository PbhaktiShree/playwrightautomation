import {test,expect} from '@playwright/test';
let webContext;


test.beforeAll(async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator("#userEmail").fill("bhaktipawar00@gmail.com");
    await page.locator("#userPassword").fill("Bhakti@6789");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path:'state.json'});
    webContext=    await browser.newContext({storageState:'state.json'});


});

test('client login',async()=>{
   const page=await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.pause();

});