const getWeather = () => {
  currentWeather = {};
  return fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=Unquillo&units=metric&APPID=9c81039df63c4bf1ca72f93fc1b855b6',
    { mode: 'cors' },
  )
    .then((w) => w.json())
    .then((w) => {
      currentWeather.temp = w.main.temp;
      return currentWeather;
    })
    .catch(() => console.log('Error, no se pudo obtener'));
};

// getWeather().then(
//   (w) => {w.temp < 20 ? return "},
// );

fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=qMi5rWS5ah58ARWgaM6P18KEOgjsSUl8&s=cold',
  { mode: 'cors' },
);
