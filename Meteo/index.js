let cityWeather = [];
const result = document.getElementById("result");
const search = document.getElementById("search");
const form = document.querySelector("form");
let city = "";

const fetchWeather = async (param) => {
  await fetch(
    "http://api.weatherstack.com/current?access_key=fcca62de32df73a473819df5aa4b4b8e&query=" +
      param
  )
    .then((res) => res.json())
    .then((data) => (cityWeather = data));

  cityWeather
    ? weatherDisplay()
    : (result.innerHTML = `<h2>Il n'y a pas de resultat pour cette ville<h2>`);
};

const weatherDisplay = () => {
  result.innerHTML = `
      <div class="card">
        <h2>${cityWeather.request.query}</h2>
        <p>${cityWeather.current.temperature}</p>
        <img src="${cityWeather.current.weather_icons}" alt="icone meteo">
      </div>
        `;
};

search.addEventListener("input", (e) => {
  e.preventDefault;
  city = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(city);
});
