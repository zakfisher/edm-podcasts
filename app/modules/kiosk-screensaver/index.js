module.exports = angular.module('KioskScreenSaver', [])

.run(function (KioskScreenSaver) {
  console.log('setup screensaver');
  window.addEventListener('touchstart', KioskScreenSaver.resetTimeout);
})

.service('KioskScreenSaver', function ($timeout, $rootScope) {
  var self = {},
    saverTimeoutFunction,
    saverTimeout;

  saverTimeout = 10000;

  self.resetTimeout = function () {
    clearTimeout(saverTimeoutFunction);
    saverTimeoutFunction = setTimeout(function () {
      self.run();
      $rootScope.$apply();
    }, 10000);
  };

  self.run = function () {
    self.isRunning = true;
  };

  self.exit = function () {
    self.isRunning = false;
    self.resetTimeout();
  };

  self.setScreenSaverTimeout = function (n) {
    saverTimeout = n;
  };

  self.resetTimeout();

  return self;
})

.directive('kioskScreensaver', function () {
  return {
    restrict: "E",
    template: require('./screensaver.html'),
    controller: function ($scope, $famous, $timeout, KioskScreenSaver) {

      var Transitionable = $famous['famous/transitions/Transitionable'];
      var Easing = $famous['famous/transitions/Easing'];

      $scope.saverPosition = new Transitionable([0, 0, 200]);
      $scope.saverOpacity = new Transitionable(0);
      $scope.KioskScreenSaver = KioskScreenSaver;

      $scope.$watch('KioskScreenSaver.isRunning', function (a, b) {
        if (a !== b) {
          if (a) {
            $scope.startScreenSaver();
          } else {
            $scope.exitScreenSaver();
          }
        }
      });

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

    }
  };
});