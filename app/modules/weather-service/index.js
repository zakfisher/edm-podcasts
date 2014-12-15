module.exports = angular.module('WeatherService', [])

// Preload weather on boot
.run(function (WeatherService) {
  WeatherService.cache();
})

.service('WeatherService', function ($http, Preloader) {
  var self = {};

  self.cache = function (next) {
    var weatherTask = Preloader.createTask('Get Weather');
    $http({
      method: 'GET',
      cache: false,
      url: '/weather'
    }).success(function (r) {
      self.setWeather(r);
      weatherTask.resolve();
      console.log('weather', self.getCurrentTemp(), self.getSummary());
      if (typeof next === 'function') {
        next();
      }
    }).error(function () {
      console.warn('could not get weather!');
    });
  };

  self.setWeather = function (weather) {
    self.weather = weather;
  };

  self.getWeather = function () {
    return self.weather;
  };

  self.getCurrentTemp = function () {
    return Math.floor(self.weather.currently.temperature);
  };

  self.getSummary = function () {
    return self.weather.currently.summary;
  };

  return self;
});