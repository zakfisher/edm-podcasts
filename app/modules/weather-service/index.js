module.exports = angular.module('WeatherService', [])

// Preload weather on boot
.run(function (WeatherService) {
  WeatherService.cache();
})

.service('WeatherService', function ($http, Preloader) {
  var self = {};
  self.cache = function(next) {
    var weatherTask = Preloader.createTask('Get Weather');
    $http({
      cache: false,
      method: "GET",
      // url: "http://api.openweathermap.org/data/2.5/weather?lat=38.990622&lon=-76.544522"
      url: "/cache-data/weather.json"
      // api/latitude,longitude
      // method: 'JSONP',
      // url: "https://api.forecast.io/forecast/9e39cf0f631c2bd05927bd364942a3e6/38.990622,-76.544522"
    }).success(function (r) {
      self.setWeather(r);
      weatherTask.resolve();
      if (typeof next === 'function') next();
    });
  };

  self.setWeather = function (weather) {
    self.weather = weather;
  };

  self.getWeather = function () {
    return self.weather;
  };

  self.getCurrentTemp = function() {
    var kelvin = self.weather.main.temp;
    var celcius = kelvin - 273.15;
    var fahrenheit = celcius * 9 / 5 + 32;
    return Math.floor(fahrenheit);
  };

  self.getSummary = function() {
    return self.weather.weather[0].description;
  };

  return self;
});