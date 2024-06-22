const weatherForm = document.querySelector("form");
const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");
const city = document.querySelector("#city");
const forecastDiv = document.querySelector("#forecast");
const errDiv = document.querySelector("#err");
console.log("forecastDiv:", forecastDiv);
const weatherDescription = document.querySelector("#weather-description");
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
      return;
    } else {
      city.innerHTML = weatherInfo.name;
      temp.innerHTML = weatherInfo.temp + "⁰c";
      weatherDescription.innerHTML = weatherInfo.weatherDescription;
      weatherIcon.src = weatherInfo.weatherIcon;
      forecastDiv.style.height = "12rem";
    }
  } catch {
    console.log("error in client js");
  } finally {
    timer = setTimeout(() => {
      errDiv.style.height = 0;
      //   window.location.reload();
    }, 3000);
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
