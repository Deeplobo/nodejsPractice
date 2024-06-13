const fetch = require("node-fetch");
async function fetchWeather(address) {
  try {
    const url = `http://api.weatherstack.com/current?access_key=99fa573d79a3712416b81caa11888fda&query=${address}`;
    const response = (await fetch(url)).json();
    const data = await response;
    const temp = data.current.temperature;
    const weatherIcon = data.current.weather_icons[0];
    const weatherDescription = data.current.weather_descriptions[0];
    return { temp, weatherIcon, weatherDescription };
  } catch {
    return { err: "smoothing went wrong, check your address or connection" };
  }
}
module.exports = fetchWeather;
