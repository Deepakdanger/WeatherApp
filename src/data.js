const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apikey = 'fb753068c50ed5cce41532cfcd23cb68';

const dataWeather = async (city) => {
  try {
    const response = await fetch(`${url}${city}&appid=${apikey}`);
    const information = await response.json();
    return information;
  } catch (err) {
    return err;
  }
};

export default dataWeather;