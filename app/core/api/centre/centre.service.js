module.exports = function ($http, config) {
  var self = {};

  self.preload = function (centre) {
    var req = $http({
      method: 'GET',
      cache: true,
      url: 'http://api.westfield.io/api/centre/master/centres/' + centre + '.json'
    });
    req.success(function (r) {
      self.setCentre(r);
    });
    return req;
  };

  self.setCentre = function (centre) {
    self.centre = centre;
  };

  self.getCentre = function () {
    return self.centre;
  };

  return self;
};