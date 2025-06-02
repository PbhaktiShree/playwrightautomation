import { test, expect, request } from '@playwright/test';
import { APIutils } from './utils/APIutils.js';

const loginPayload = {
  userEmail: "bhaktipawar00@gmail.com",
  userPassword: "Bhakti@6789"
};

const orderPayload ={orders:[{country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};
let token; // Global token
let orderId;
let response;
test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtilsInstance = new APIutils(apiContext,loginPayload);
  response=await apiUtilsInstance.createOrder(orderPayload);

  // const loginResponse = await apiContext.post(
  //   'https://rahulshettyacademy.com/api/ecom/auth/login',
  //   {
  //     data: loginPayload,
  //   }
  // );
  // expect(loginResponse.ok()).toBeTruthy();
  // const loginResponseJson = await loginResponse.json();
  // //console.log(loginResponseJson)
  // token = await loginResponseJson.token;
});

// test('Verify token is fetched and usable', async () => {
//   expect(token).toBeTruthy(); 
  
// });

// test('login',async({page})=>{
//     await page.addInitScript(value =>{
//       window.localStorage.setItem('token',value)
//     },token);
//     await page.goto('https://rahulshettyacademy.com/client/')
//     //await page.pause();
// });

test('place order',async ({page})=>{
  page.addInitScript(value=>{
    window.localStorage.setItem('token',value);
  },response.token);
  let orderid=response.orderId
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.locator("button[routerLink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows=await page.locator("tbody tr");

  for (let i=0;i<await rows.count();i++)
  {
    const rowOrderId=await rows.nth(i).locator("th").textContent();
    
      if(orderid.includes(rowOrderId))
      {
        await rows.nth(i).locator("button").first().click();
      }
    
  }
  await page.pause();

});