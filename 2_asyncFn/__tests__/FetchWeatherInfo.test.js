const FetchWeatherInfo = require("../modules/FetchWeatherInfo");

describe("FetchWeatherInfo Test", () => {
  test('get data of PublishOffice',()=>{
     expect.assertions(1); 
      
   return FetchWeatherInfo().then(value=>{
        expect(value).toBe("気象庁");
      })
     
  })
});
