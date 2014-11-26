module.exports = angular.module('CentreService', [])

// Preload centre on boot
.run(function ($http, Preloader, CentreService) {
  var centreTask = Preloader.createTask('Get Centre');
  $http({
    method: 'GET',
    cache: true,
    url: "http://api.westfield.io/api/centre/master/centres/valleyfair.json"
  }).success(function (r) {
    CentreService.setCentre(r);
    centreTask.resolve();
  });
})

.service('CentreService', function () {
  var self = {};

  self.setCentre = function (centre) {
    self.centre = centre;
  };

  self.getCentre = function () {
    return self.centre;
  };

  return self;
});