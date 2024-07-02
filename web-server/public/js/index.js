const weatherForm = document.querySelector("form");
const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const forecastDiv = document.querySelector("#forecast");
const errDiv = document.querySelector("#err");
const weatherDescription = document.querySelector("#weather-description");
let timer, timer2;
//event listener for form
weatherForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cityName = e.target.city.value;
  const weatherInfo = await fetchWeatherClient(cityName);
  try {
    if (weatherInfo.err) {
      errDiv.style.color = "red";
      errDiv.style.height = "5rem";
      errDiv.innerHTML = weatherInfo.err;
      timer = setTimeout(() => {
        errDiv.style.height = 0;
        clearTimeout(timer);
        // window.location.reload();
      }, 3000);
      return;
    } else {
      city.innerHTML = weatherInfo.name;
      temp.innerHTML = weatherInfo.temp + "⁰c";
      weatherDescription.innerHTML = weatherInfo.weatherDescription;
      weatherIcon.src = weatherInfo.weatherIcon;
      forecastDiv.style.height = "12rem";
      timer2 = setTimeout(() => {
        forecastDiv.style.height = 0;
        clearTimeout(timer2);
      }, 10000);
    }
  } catch {
    console.log("error in client js");
  } finally {
    console.log("fetch function ended");
  }
});
//client side fetch function
const fetchWeatherClient = async (city) => {
  const url = `http://localhost:3000/weather?address=${city}`;
  try {
    const data = await fetch(url);
    const weather = await data.json();
    return weather;
  } catch (er) {
    return { err: "Error in client side js" };
  } finally {
    console.log("weather function ended");
  }
};
