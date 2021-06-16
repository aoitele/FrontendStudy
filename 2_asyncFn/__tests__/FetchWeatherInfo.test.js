const FetchWeatherInfo = require("../modules/FetchWeatherInfo");

<<<<<<< HEAD
describe("FetchWeatherInfo Test", () => {
  test('get data of PublishOffice',()=>{
     expect.assertions(1); 
      
   return FetchWeatherInfo().then(value=>{
        expect(value).toBe("気象庁");
      })
     
  })
});
=======
describe("FetchWeatherInfo Test", () => {});
>>>>>>> upstream/main
