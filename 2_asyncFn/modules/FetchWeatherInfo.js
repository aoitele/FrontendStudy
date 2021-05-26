const axiosBase = require("axios");

const FetchWeatherInfo = async () => {
  const url =
    "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";

  const axios = axiosBase.create({
    baseURL: url,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    responseType: "json",
  });

  try {
    const res = await axios.get(url);
    return res.data.publishingOffice;
  } catch (e) {
    console.log(e, "error");
  }
};

module.exports = FetchWeatherInfo;
