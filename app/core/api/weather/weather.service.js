module.exports = function ($http, config, Centre) {
  var self = {};

  self.preload = function (next) {
    var url = 'https://api.forecast.io/forecast/' + config.API.forecastIOapiKey + '/' + Centre.get().latitude + ',' + Centre.get().longitude + '?callback=?';
    $.getJSON(url, function (r) {
      self.set(r);
      if (typeof next === 'function') next(r);
    })
    .error(function () {
      console.warn('Could not get weather!');
    });
  };

  self.set = function (weather) {
    self.weather = weather;
  };

  self.get = function () {
    return self.weather;
  };

  self.getCurrentTemp = function () {
    return Math.floor(self.weather.currently.temperature);
  };

  self.getSummary = function () {
    return self.weather.currently.summary;
  };

  return self;
};