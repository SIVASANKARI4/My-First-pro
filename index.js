function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "088d8a6c5e7273acf522248253ec0282";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityElement.innerHTML}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `${temperature}`;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  let h2 = document.querySelector("h2");
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  h2.innerHTML = `${temperature} `;
}

function retrievePosition(Position) {
  let apiKey = "088d8a6c5e7273acf522248253ec0282";
  let lat = Position.coords.latitude;
  let lon = Position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

function specifyDate(now) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let daynumber = now.getDay();
  let day = days[daynumber];
  // let months= [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];

  return `${day} ${hours}:${minutes}`;
}
let dateElem = document.querySelector("#date");
let currTime = new Date();
dateElem.innerHTML = specifyDate(currTime);

function convertToFahrenheit(event) {
  event.preventDefault();
  let tempElem = document.querySelector("#temp");
  tempElem.innerHTML = 66;
}
function convertToCelsius(event) {
  event.preventDefault();
  let tempElem = document.querySelector("#temp");
  tempElem.innerHTML = 19;
}
let fahrenheitLink = document.querySelector("#f-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
let celsiusLink = document.querySelector("#c-link");
celsiusLink.addEventListener("click", convertToCelsius);
