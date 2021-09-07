function displayWeather() {
  const api = {
    key: '1f82bf42f57863a5a2f579cecc0bdac0',
    baseurl: 'https://api.openweathermap.org/data/2.5',
  };
  let loc = document.querySelector('#getLocation');
  let form = document.querySelector('#containerForm');
  let input = 'Portland';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    input = loc.value;
    getWeather(input);
  });

  async function getWeather(input) {
    try {
      const url = await fetch(
        `${api.baseurl}/weather?q=${input}&appid=${api.key}`
      );
      const data = await url.json();
      displayData(data);
    } catch (error) {
      console.log(error);
    }
  }

  function displayData(data) {
    console.log(data);
    const location = document.querySelector('#location');
    let temp = document.querySelector('#temp');
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const today = new Date();
    const feelsLike = document.querySelector('#feelsLike');
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');

    let tempFmin = Math.round(((data.main.temp_min - 273.15) * 9) / 5 + 32);

    let tempFmax = Math.round(((data.main.temp_max - 273.15) * 9) / 5 + 32);

    min.innerHTML = `${tempFmin}°F`;
    max.innerHTML = `${tempFmax}°F`;

    location.innerHTML = data.name;

    temp.innerHTML = `${Math.round(
      ((data.main.temp - 273.15) * 9) / 5 + 32
    )}°F`;

    feelsLike.innerHTML = `Feels Like: ${Math.round(
      ((data.main.feels_like - 273.15) * 9) / 5 + 32
    )}°F`;

    date.innerHTML = `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`;

    let hours = today.getHours();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = today.getUTCMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    time.innerHTML = `${hours}:${minutes} ${ampm}`;
  }

  getWeather(input);
}

export default displayWeather;
