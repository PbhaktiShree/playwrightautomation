const {test,expect}=require('@playwright/test');

test('sign_in_front',async ({page})=>{
    await page.goto('https://craftschool-front.ortdemo.com/sign-in');
    const email=page.locator("#email");
    await email.fill('bhaktipawar00@gmail.com');
    const password=page.locator("#password");
    await password.fill('Admin@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(5000);

});