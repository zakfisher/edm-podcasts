module.exports = function(API, WeatherAPI) {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  self.display = function() {
    angular.extend(self.scope.weather, {
      currentTemp: WeatherAPI.getCurrentTemp(),
      summary: WeatherAPI.getSummary()
    });
  };

  self.update = function() {
    API.fetchWeather(self.display);
  };

  return self;
};