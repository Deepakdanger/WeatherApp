
import dataWeather from './data';

import {
  cityDiv,
  weatherDescription,
  typeWeatherDiv,
  tempDiv,
  humidityDiv,
} from './projectDOM';

const description = document.getElementById('description');

const cityInput = document.querySelector('[city-form]');

const newCityName = document.querySelector('[city-form-input]');

const display = (city) => {
  const infoWeather = await dataWeather(city);
  if (infoWeather.cod === 200) {
    cityDiv.innerHTML = `Location: ${infoWeather.name}, <spam>${infoWeather.sys.country}</spam>`;
    description.appendChild(cityDiv);
    description.appendChild(weatherDescription);
    typeWeatherDiv.innerText = `Weather type: ${infoWeather.weather[0].description}`;
    tempDiv.innerText = `Temprature: ${infoWeather.main.temp} %`;
    humidityDiv.innerText = `Humidity: ${infoWeather.main.humidity} %`;
    weatherDescription.appendChild(typeWeatherDiv);
    weatherDescription.appendChild(tempDiv);
    weatherDescription.appendChild(humidityDiv);
    
  } else {
  }

};



cityInput.addEventListener('submit', e => {
    e.preventDefault();
    const city = newCityName.value;
    display(city);
    cityInput.reset();
  });