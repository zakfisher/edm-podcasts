module.exports = angular.module('KioskService', [])

.run(function (KioskService) {})

.service("KioskService", function ($http) {

  var self = {};

  self.saveState = function (destination) {
    var _id = 23;
    var state = {
      destination: destination
    };
    console.log("attempting to save state", state);
    $http({
      headers: {
        "Content-Type": "application/json"
      },
      method: 'PUT',
      dataType: 'json',
      data: state,
      url: 'http://kiosk-service-proto.herokuapp.com/api/kiosks/master/kiosks/' + _id + '/state',
    }).success(function (r) {
      console.log('saved state', r);
    }).error(function (e) {
      console.log('state save error', e);
    });

  };

  return self;

});