module.exports = function(API, WeatherAPI) {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  return self;
};