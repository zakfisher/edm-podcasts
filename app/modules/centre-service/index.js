module.exports = angular.module('CentreService', [])

// Preload centre on boot
.run(function (Preloader, CentreService) {
  var centreTask = Preloader.createTask('Get Centre');
  CentreService.preload().success(centreTask.resolve());
})

.service('CentreService', function ($http) {
  var self = {};

  self.preload = function () {
    return $http({
      method: 'GET',
      cache: true,
      url: 'http://api.westfield.io/api/centre/master/centres/valleyfair.json'
    }).success(function (r) {
      self.setCentre(r);
    });
  };

  self.setCentre = function (centre) {
    self.centre = centre;
  };

  self.getCentre = function () {
    return self.centre;
  };

  return self;
});