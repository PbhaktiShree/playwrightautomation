const {test,expect} = require('@playwright/test')

test('brwser first test case',async ({browser})=>
{

    //paywright code
    //open browser
    //enter u/p 2 seconds
    //click

   const context=await browser.newContext();
   const page= await context.newPage();
   await page.goto('https://uat-craftschool.onerooftechnologiesllp.com/admin')

});

test('page default browser first test case',async ({page})=>
{
    // await page.goto('https://uat-craftschool.onerooftechnologiesllp.com/admin')
    
    // const email=page.locator('[name="email"]');
    // await email.fill("admin@craftschool.com");
    // await page.locator('[name="password"]').fill("admin@123#");
    // await page.locator('button[type="submit"]').click();
    //await page.waitForTimeout(5000);
    //await expect(page).toHaveTitle("Google");
    


        await page.goto('https://htmlcodex.com/demo/?item=3464');
        // const iframeElement = await page.waitForSelector('iframe');
        // const frame = await iframeElement.contentFrame();
        // await frame.waitForSelector('.navbar-nav a');
        // const navLinks = frame.locator('.navbar-nav a');
        // const firstNavText = await navLinks.first().textContent();
        // console.log('First Navbar Link Text:', firstNavText?.trim());

         // visual pause


        //await page.goto();
        // const iframeElement=await page.waitForSelector('iframe');
        // const frame =await iframeElement.contentFrame();
        // frame.waitForSelector('.owl-item h1')
        // const headings = frame.locator('.owl-item h1');
        // const allHeadings = await headings.allTextContents();
        // console.log(allHeadings);
        // await page.waitForTimeout(5000);

});