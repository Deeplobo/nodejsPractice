const fetch = require("node-fetch");
async function fetchWeather(address) {
  try {
    const url = `http://api.weatherstack.com/current?access_key=99fa573d79a3712416b81caa11888fda&query=${address}`;
    const response = (await fetch(url)).json();
    const data = await response;
    if (!data.error) {
      const temp = data.current.temperature;
      const weatherIcon = data.current.weather_icons[0];
      const weatherDescription = data.current.weather_descriptions[0];
      const name = data.request.query;
      return { temp, weatherIcon, weatherDescription, name };
    } else {
      return { err: data.error.info };
    }
  } catch (err) {
    return { err: "Bhag ja yaha se Chadar jaat!" };
  }
}
module.exports = fetchWeather;
