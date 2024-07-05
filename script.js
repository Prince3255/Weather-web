const apikey ="ff8faa897d25caea319b5162fa7e474e"
const city = document.getElementById('name');
const searchbtn = document.querySelector('button');
const weatherimg = document.querySelector('.WeatherImage');
const aurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weatherapi(city) {
    const response = await fetch(aurl + city +`&appid=${apikey}`)
    if(response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.WAPI').style.display = "none";
    }
    else {
    var data = await response.json(); 
    document.querySelector('.cityName').innerHTML = data.name;
    document.getElementById('temp').innerHTML = data.main.temp + "°C";
    document.querySelector('.humid').innerHTML = data.main.humidity + " %";
    document.getElementsByClassName('windd')[0].innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "Clear") {
        weatherimg.src = "weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherimg.src = "weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        weatherimg.src = "weather-app-img/images/mist.png";
    }
    else if(data.weather[0].main == "Snow") {
        weatherimg.src = "weather-app-img/images/snow.png";
    }
    else if(data.weather[0].main == "Clouds") {
        weatherimg.src = "weather-app-img/images/clouds.png";
    }
    console.log(data)
    document.querySelector('.WAPI').style.display = "block"
    document.querySelector('.error').style.display = "none";
    }
}
searchbtn.addEventListener('click',function() {
    weatherapi(city.value);
})