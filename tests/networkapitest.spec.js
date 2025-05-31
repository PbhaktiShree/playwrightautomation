import { test, expect, request } from '@playwright/test';

const loginPayload = {
  userEmail: "bhaktipawar00@gmail.com",
userPassword: "Bhakti@6789"
};

let token; // Global token

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const loginResponse = await apiContext.post(
    'https://rahulshettyacademy.com/api/ecom/auth/login',
    {
      data: loginPayload,
    }
  );
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  console.log(loginResponseJson)
  token = await loginResponseJson.token; // ✅ Now this updates global token
  //console.log("Token fetched in beforeAll:", token);
});

test('Verify token is fetched and usable', async () => {
  expect(token).toBeTruthy(); // ✅ This will now pass
});

test('login',async({page})=>{
    await page.addInitScript(value =>{
      window.localStorage.setItem('token',value)
    },token);
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.pause();
    

});