module.exports = function ($http, Hardware) {
  var self = {};

  self.preload = function () {
    var req = $http({
      method: 'GET',
      cache: true,
      url: 'http://api.westfield.io/api/centre/master/centres/' + Hardware.get().centre.id + '.json'
    });
    req.success(function (r) {
      self.set(r);
    });
    req.error(function () {
      console.warn('Could not get centre!');
    });
    return req;
  };

  self.set = function (centre) {
    self.centre = centre;
  };

  self.get = function () {
    return self.centre;
  };

  return self;
};