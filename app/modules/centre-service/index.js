module.exports = angular.module('CentreService', [])

// Preload centre on boot
.run(function (Preloader, CentreService) {
  var centreTask = Preloader.createTask('Get Centre');
  CentreService.preload().then(centreTask.resolve());
})

.service('CentreService', function ($http, config) {
  var self = {};

  self.preload = function () {
    var req = $http({
      method: 'GET',
      cache: true,
      url: 'http://api.westfield.io/api/centre/master/centres/' + config.centre.id + '.json'
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
});