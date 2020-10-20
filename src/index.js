import './style.css';
import {
  searchBtn,
  cityName,
} from './dom';

const currentUnit = 'F';

const getDatas = (weatherData) => {
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const temperature = weatherData.main.temp;
  const description = weatherData.weather[0].description;  
  
  return {
    city,
    country,
    temperature,
    description,
  }
}

const renderData = (selectedData) => {
  
}

async function getWeather(location) {
  alert("am In");
  const urlLink = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4dc55b39eebd848607f246ce75cffecd`;
  const response = await fetch(urlLink, {mode: 'cors'});
  const weatherData = await response.json();
  const selectedData = getDatas(weatherData);
  console.log(selectedData);
}

searchBtn.onclick = (ev) => {
  ev.preventDefault();  
  getWeather(cityName.value);
};
