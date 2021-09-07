const api = {
  key: '1f82bf42f57863a5a2f579cecc0bdac0',
  baseurl: 'https://api.openweathermap.org/data/2.5',
};

function displayWeather() {
  async function getWeather() {
    try {
      const url = await fetch(
        `${api.baseurl}/weather?q=Portland&appid=${api.key}`
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
    const temp = document.querySelector('#temp');
    const date = document.querySelector('#date');
    const time = document.querySelector('#time');
    const today = new Date();
    let hours = today.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = today.getUTCMinutes();

    location.innerHTML = data.name;
    temp.innerHTML = `${Math.round(
      ((data.main.temp - 273.15) * 9) / 5 + 32
    )}°F`;

    date.innerHTML = `${
      today.getMonth() + 1
    }/${today.getDate()}/${today.getFullYear()}`;

    time.innerHTML = `${hours}:${minutes}`;
  }
  getWeather();
}
export default displayWeather;
