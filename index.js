const asyncGetWeather = async () => {
  const currentWeather = {};
  const city = document.getElementById('inputCity').value;
  const weather = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=9c81039df63c4bf1ca72f93fc1b855b6`,
    { mode: 'cors' },
  );
  const weatherJson = await weather.json();
  currentWeather.city = weatherJson.name;
  currentWeather.temp = weatherJson.main.temp;
  currentWeather.weatherImg = `http://openweathermap.org/img/wn/${weatherJson.weather[0].icon}@4x.png`;
  return currentWeather;
};

const generateWeatherDisplay = (weather) => {
  const createHTML = (() => {
    const container = document.getElementById('weatherContainer');
    container.innerHTML = '';
    const city = document.createElement('h2');
    city.id = 'city';
    const temp = document.createElement('h3');
    temp.id = 'temp';
    const weatherImg = document.createElement('img');
    weatherImg.id = 'weatherImg';
    container.appendChild(city);
    container.appendChild(temp);
    container.appendChild(weatherImg);
    return { city, temp, weatherImg };
  })();
  const fillDisplay = (() => {
    createHTML.city.textContent = weather.city;
    createHTML.temp.textContent = weather.temp;
    createHTML.weatherImg.src = weather.weatherImg;
  })();
};

document.getElementById('searchBtn').addEventListener('click', async () => {
  try {
    const currentWeather = await asyncGetWeather();
    generateWeatherDisplay(currentWeather);
    document.getElementById('error').textContent = '';
  } catch (error) {
    document.getElementById('error').textContent = 'City not found';
  }
});
