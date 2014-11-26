module.exports = angular.module('WeatherService', [])

// Preload weather on boot
.run(function ($http, Preloader, WeatherService) {
  var weatherTask = Preloader.createTask('Get Weather');
  $http({
    method: 'GET',
    cache: true,
    url: "/cache-data/weather.json"
    // api/latitude,longitude
    //url: "https://api.forecast.io/forecast/9e39cf0f631c2bd05927bd364942a3e6/38.990622,-76.544522"
  }).success(function (r) {
    WeatherService.setWeather(r);
    weatherTask.resolve();
  });
})

.service('WeatherService', function () {
  var self = {};

  self.setWeather = function (weather) {
    self.weather = weather;
  };

  self.getWeather = function () {
    return self.weather;
  };

  self.getCurrentTemp = function() {
    return Math.floor(self.weather.currently.apparentTemperature);
  };

  self.getSummary = function() {
    return self.weather.currently.summary;
  };

  return self;
});