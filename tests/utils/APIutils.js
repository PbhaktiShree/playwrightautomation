export  class APIutils
{
      
    constructor(apiContext,loginPayload)
    {
      this.apiContext=apiContext;
      this.loginPayload=loginPayload;
    }
  
    
    async getToken()
    {
        const loginResponse = await this.apiContext.post(
            'https://rahulshettyacademy.com/api/ecom/auth/login',
            {
              data: this.loginPayload,
            }
        );
          
        const loginResponseJson = await loginResponse.json();
        //console.log(loginResponseJson)
        const token = await loginResponseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(orderPayload)
    {
        let response={};
        response.token=await this.getToken();
        const orderResponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{
          data:orderPayload,
          headers :{
            'Authorization':response.token,
            'content-type':"application/json",
          }
        });

        const orderResjson= await orderResponse.json();
        console.log(await orderResjson)
        response.orderId=await orderResjson.orders[0];
        console.log(await response);

        return response;
    }
}

