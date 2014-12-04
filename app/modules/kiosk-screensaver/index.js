module.exports = angular.module('KioskScreensaver', [])

.directive('kioskScreensaver', function () {
  return {
    restrict: "E",
    template: require('./screensaver.html'),
    controller: function ($scope, $famous, $timeout) {

      var Transitionable = $famous['famous/transitions/Transitionable'];
      var Easing = $famous['famous/transitions/Easing'];

      $scope.saverPosition = new Transitionable([0, 0, 200]);
      $scope.saverOpacity = new Transitionable(0);

      $scope.exitScreenSaver = function () {
        $scope.saverPosition.set([0, 0, 1000], {
          duration: 500
        }, function () {
          $scope.showScreenSaver = false;
        });
        $scope.saverOpacity.set(0, {
          duration: 500
        });
        $scope.uiComeForward();
      };

      $scope.startScreenSaver = function () {
        $scope.showScreenSaver = true;
        $scope.saverPosition.set([0, 0, 0], {
          duration: 500
        });
        $scope.saverOpacity.set(1, {
          duration: 500
        });
        $scope.uiGoBack();
      };

      $timeout(function () {
        $scope.startScreenSaver();
      }, 5000);

    }
  };
});