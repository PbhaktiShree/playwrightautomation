//https://craftschool-front.ortdemo.com/sign-up

const {test,expect} = require('@playwright/test');

test('register',async ({page})=>{
   await page.goto('https://craftschool-front.ortdemo.com/sign-up');

   const firstName= page.locator("#firstName");
   await firstName.fill("automate")
   const lastName= page.locator("#lastName");
   await lastName.fill("test");

   const email= page.locator("#email");
   await email.fill("automate1@gmail.com");

   const phoneNumber= page.locator("#phoneNumber");
   await phoneNumber.fill("9867896456");

   const password= page.locator("#password");
   await password.fill("Admin@123");

   await page.locator('button[type="submit"]').click();

   // console.log(firstName)
    await page.waitForTimeout(5000);
});

