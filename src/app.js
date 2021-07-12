function displayTemp(response) {
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "8d2107fd2cdb7e4922d9ae2a41298ba2";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mashhad&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
