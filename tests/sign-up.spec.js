const {test,expect} = require('@playwright/test');

test('sign_up_test',async ({page})=>{
    await page.goto('https://www.zoho.com/forms/index1.html');

    const companame=page.locator("#portalcompanyname");
    await companame.fill("TCS");

    const email=page.locator("#email");
    await email.fill("test4455dfff@gmail.com");

    const password=page.locator("#password");
    await password.fill("Admin455dd@123");

    const rmobile=page.locator("#rmobile");
    await rmobile.fill("7896543267");

    console.log(await page.locator("#tos").isVisible());
    await page.locator("#tos").click({ force: true });
    //await page.locator("#signupbtn").click();
    //await page.pause();
});

test.only('new_browser_tab',async ({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://uat-craftschool.onerooftechnologiesllp.com/admin');

    const page1=await context.newPage();
    await page1.goto('https://www.facebook.com/');
    page1.pause();
});

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage]=await Promise.all(
    [
        context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
        documentLink.click(),

    ])//new page is opened


    const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());
    await page.pause();
 })