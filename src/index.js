
import dataWeather from './data';

import {
  cityDiv,
  countryDiv,
  weatherDescription,
  typeWeatherDiv,
  tempDiv,
  humidityDiv,
} from './projectDOM';

//const taskFormBody = document.getElementById('task_form_body');

const cityInput = document.querySelector('[city-form]');

const newCityName = document.querySelector('[city-form-input]');

const display = (city) => {
  const infoWeather = await dataWeather(city);
  if (infoWeather.cod === 200) {
    cityDiv.innerHTML = `Location: ${infoWeather.name}, ${infoWeather.sys.country}`;

  }

};



cityInput.addEventListener('submit', e => {
    e.preventDefault();
    const city = newCityName.value;
    display(city);
    cityInput.reset();
  });