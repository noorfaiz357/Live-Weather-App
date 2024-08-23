//selection
const apiKey = "94de8477c67029a2bd2fa2e8e9923fa1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input = document.querySelector(".search input");
let search = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
//weather check and update function
async function checkWeather(value) {
  const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${value}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)}&degC`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "icons/partly-cloudy-day.svg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "icons/clear-day.svg";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "icons/rain.svg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "icons/mist.svg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "icons/drizzle.svg";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "icons/snow.svg";
    } else if (data.weather[0].main == "Smoke") {
        weatherIcon.src = "icons/smoke.svg";
    }
    else if (data.weather[0].main == "Haze") {
        weatherIcon.src = "icons/haze.svg";
    }
    else if (data.weather[0].main == "Fog") {
        weatherIcon.src = "icons/fog.svg";
    }
    else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "icons/thunderstorms.svg";
    }

    document.querySelector(".weather").style.display = "initial";
    document.querySelector(".error").style.display = "none";
  }
}
// searching event 
search.addEventListener("click", () => {
  if (input.value == "") {

    document.querySelector(".error").innerHTML = "Input field is empty!"
    document.querySelector(".error").style.display = "block";
    this.setTimeout(()=>{
        document.querySelector(".error").innerHTML = "Invalid city name!"
    document.querySelector(".error").style.display = "none";
    },5000)
  } else {

    checkWeather(input.value);
  }
});
window.addEventListener("keydown",function(key){
    if(key.keyCode == 13){
        if (input.value == "") {
            document.querySelector(".error").innerHTML = "Input field is empty!"
            document.querySelector(".error").style.display = "block";
            this.setTimeout(()=>{
                document.querySelector(".error").innerHTML = "Invalid city name!"
            document.querySelector(".error").style.display = "none";
            },5000)
          } else {
            checkWeather(input.value);
          }
    }
    else{}
})