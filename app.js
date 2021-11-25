const fetchCityData = async () => {
  const cityName = document.getElementById('cities').value;

  const url = 'https://python3-dot-parul-arena-2.appspot.com/test?cityname=';
  const response = await fetch(`${url}${cityName}`);

  const json = await response.json();

  document.querySelector('.city__name').innerText =
    document.getElementById('cities').value;
  document.querySelector(
    '.city__description'
  ).innerText = `Description : ${json.description}`;
  document.querySelector(
    '.city__temp'
  ).innerText = `Temperature (C): ${json.temp_in_celsius}`;
  document.querySelector(
    '.city__pres'
  ).innerText = `Pressure (hPa) : ${json.humidity_in_percent}`;
  document.querySelector(
    '.city__data'
  ).innerText = `Date : ${json.date_and_time}`;

  const date = new Date().toLocaleDateString();
  console.log(date, json.date_and_time.split(',')[0]);
};

const fetchNewCityData = () => {
  const inputName = document.querySelector('.search__name');
  console.log(inputName);
};
