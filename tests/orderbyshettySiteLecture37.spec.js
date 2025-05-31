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
    await page.getByPlaceholder("email@example.com").fill("bhaktipawar00@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Bhakti@6789");
    await page.getByText("Login",{exact:true}).click();
    //await page.pause();
    const productName = 'ZARA COAT 3';
    await page.locator(".card-body b").first().waitFor();
    //const titles=await page.locator(".card-body b").allTextContents();
    const products = await page.locator(".card-body").filter({hasText:productName}).getByRole('button',{name:"Add To Cart"}).click();
    await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button",{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.getByRole("button",{name :"India"}).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    await expect(page.getByText("Thank you for the order.")).toBeVisible();
    await page.pause();
});

// test("order_product",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/client/dashboard/dash")
//     const cards = await page.locator('#products .card');
//     console.log('count=' + await cards.count());
// });