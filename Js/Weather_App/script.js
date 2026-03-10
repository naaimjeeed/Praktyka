const getWeatherBtn = document.getElementById("get-weather-btn");
const city = document.getElementById("city");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

const getWeather = async (cityName) => {
    try{
        const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${cityName}`);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }

}

const showWeather = async (cityName) => {
    try{
        const data = await getWeather(cityName);
        weatherIcon.src = data.weather?.[0]?.icon ?? "";
        mainTemperature.textContent = data.main?.temp != null ? `${data.main.temp}° C` : "N/A";
        feelsLike.textContent = `Feels like: ${data.main.feels_like != null ? data.main.feels_like + "° C" : "N/A"}`;
        humidity.textContent = `Humidity: ${data.main?.humidity != null ? data.main.humidity + "%" : "N/A"}`;
        wind.textContent = `Wind: ${data.wind?.speed != null ? data.wind.speed + " m/s"  : "N/A"}`;
        windGust.textContent = `Gusts: ${data.wind?.gust!= null ? data.wind.gust + " m/s" : "N/A"}`;
        weatherMain.textContent = data.weather?.[0]?.main ?? "N/A";
        locationEl.textContent = data.name ?? "N/A";

    }catch(err){
        alert("Something went wrong, please try again later");
    }


}

getWeatherBtn.addEventListener("click", () => {
    if(!city.value){
        return;
    }else{
        showWeather(city.value);
    }
})
