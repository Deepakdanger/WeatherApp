
import dataWeather from './data';

import {
  cityDiv,
  weatherDescription,
  typeWeatherDiv,
  tempDiv,
  humidityDiv,
  change,
} from './projectDOM';

let count=1;

const description = document.getElementById('description');
const containor1 =  document.getElementById('containor');


const cityInput = document.querySelector('[city-form]');

const newCityName = document.querySelector('[city-form-input]');

const changeTemp = (tempInCel) => {
   tempDiv.innerHTML ='';
   if(count % 2 != 0) {
    const tempInFar = (tempInCel * 9/5) + 32 ;
    count += 1; 
    tempDiv.innerHTML = `Temp: ${tempInFar} F`;
    change.innerHTML=`see in celsius`;
   }
   else {
    count += 1; 
    tempDiv.innerHTML = `Temp: ${tempInCel} C`;
    change.innerHTML=`see in fahrenheit`;
   }
   tempDiv.appendChild(change);
};

const display = async (city) => {
  description.innerHTML ='';
  const infoWeather = await dataWeather(city);
  console.log(infoWeather);
  if (infoWeather.cod === 200) {
    cityDiv.innerHTML = `Location: ${infoWeather.name}, <spam>${infoWeather.sys.country}</spam>`;
    description.appendChild(cityDiv);
    description.appendChild(weatherDescription);
    typeWeatherDiv.innerText = `Weather: ${infoWeather.weather[0].main },${infoWeather.weather[0].description}`;
    const tempInCel = infoWeather.main.temp-273.15;


    tempDiv.innerHTML = `Temprature: ${tempInCel} C `;
    change.innerHTML=`see in faren`;
    change.onclick = function(){changeTemp(tempInCel)};
    
    
    humidityDiv.innerText = `Humidity: ${infoWeather.main.humidity} %`;
    weatherDescription.appendChild(typeWeatherDiv);
    tempDiv.appendChild(change);
    weatherDescription.appendChild(tempDiv);
   
    weatherDescription.appendChild(humidityDiv);

    if (infoWeather.weather[0].main === 'Rain') {
      containor1.className = 'rainy';
    } else if (infoWeather.weather[0].main === 'Haze') {
      containor1.className = 'hazy';
    } else if (infoWeather.weather[0].main === 'Clouds') {
      containor1.className = 'cloudy';
    } else if (infoWeather.weather[0].main === 'Mist') {
      containor1.className = 'cloudy';
    }else if (infoWeather.weather[0].main === 'Clear') {
      containor1.className = 'clear';
    }else if (infoWeather.weather[0].main === 'Fog') {
      containor1.className = 'fog';
    }

  } else {
    description.innerHTML = infoWeather.message;
  }

};



cityInput.addEventListener('submit', e => {
    e.preventDefault();
    const city = newCityName.value;
    display(city);
    cityInput.reset();
  });