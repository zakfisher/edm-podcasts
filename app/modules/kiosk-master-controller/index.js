module.exports = angular.module('KioskMasterCtrl', [])

.controller('KioskMasterCtrl', function ($scope, $famous, $timeout, KioskScreenSaver, config) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.masterPosition = new Transitionable([0, 0, -1000]);
  $scope.masterOpacity = new Transitionable(0);

  $scope.globalConfig = config;

  $scope.uiComeForward = function () {
    $scope.masterOpacity.set(1, {
      duration: 500
    });
    $scope.masterPosition.set([0, 0, 0], {
      duration: 500
    });
  };

  $scope.uiGoBack = function () {
    $scope.masterOpacity.set(0, {
      duration: 500
      // curve: Easing.inOutBack
    });
    $scope.masterPosition.set([0, 0, -1000], {
      duration: 500
      // curve: Easing.inOutBack
    });
  };

  $scope.uiComeForward();

});