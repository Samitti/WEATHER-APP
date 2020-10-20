import './style.css';
import {
  searchBtn,
  cityName,
  location,
  temp,
  description,
} from './dom';

const currentUnit = 'F';

const getDatas = (weatherData) => {
  const city = weatherData.name;
  const { country } = weatherData.sys;
  const temperature = weatherData.main.temp;
  const { description } = weatherData.weather[0];

  return {
    city,
    country,
    temperature,
    description,
  };
};

const renderData = (selectedData) => {
  location.textContent = `${selectedData.city},${selectedData.country}`;
  temp.textContent = `${selectedData.temperature} \u00B0${currentUnit}`;
  description.textContent = selectedData.description;
};

async function getWeather(location) {
  const urlLink = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4dc55b39eebd848607f246ce75cffecd`;
  const response = await fetch(urlLink, { mode: 'cors' });
  const weatherData = await response.json();
  const selectedData = getDatas(weatherData);
  renderData(selectedData);
}

getWeather('Asmara');

searchBtn.onclick = (ev) => {
  ev.preventDefault();
  getWeather(cityName.value);
};
