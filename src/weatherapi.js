function loadWeather(outsideTemp) {
  $('#current-temp').text(Math.round(outsideTemp-273.15))
}

function getWeatherURL(city, callback) {
  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5825517727cfeae7b4dda8b4de229d32`,callback)
}
