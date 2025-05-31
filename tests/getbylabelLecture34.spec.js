import {test,expect} from '@playwright/test';

test('get by label',async ({page})=>{
    await page.goto('https://www.w3schools.com');
    await page.getByRole('link',{name:'HTML',exact: true }).click();
    await page.getByRole('link',{name:'CSS',exact:true}).click();
    await page.getByText('JAVASCRIPT',{exact:true}).click();
    await page.pause();
});

test('w3 school',async ({page})=>{
    await page.goto('https://www.w3schools.com/bootstrap5/tryit.asp?filename=trybs_form_floating_labels&stacked=h');
    const frame = page.frame({ name: 'iframeResult' });
     if (!frame) throw new Error('iframeResult not found');
    await frame.locator('.container').getByLabel('Email',{exact:true}).fill("bhakti");
    await frame.getByPlaceholder('Enter password',{exact:true}).fill('bhakti');
    await page.pause();

});

//lecture 35

 
test.only('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
    
    await page.pause();
    //locator(css)
 
});
 
 
 
