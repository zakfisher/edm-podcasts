module.exports = angular.module('wfWeather', [])

.controller('WeatherCtrl', require('./weather.controller'))

.service('Weather', require('./weather.service'))

.directive('weather', function () {
  return {
    restrict: 'E',
    template: require('./weather.html'),
    controller: 'WeatherCtrl'
  };
});