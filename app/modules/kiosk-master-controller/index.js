module.exports = angular.module('KioskMasterCtrl', [])

.run(function (Kiosk) {
  // Init kiosk service
  console.log(Kiosk);
})

.service('Kiosk', function ($rootScope, $famous, config, $state) {
  var self = {},
    Timer = $famous['famous/utilities/Timer'],
    timeout,
    $scope = $rootScope.$new();

  // Reset and event handling logic

  self.on = function (trigger, f, scope) {
    var evt = $scope.$on(trigger, f);
    // If the event is in a scope, unbind it when the scope is removed
    if (scope) {
      scope.$on('destroy', function () {
        evt();
      });
    }
    return evt;
  };

  self.reset = function () {
    $scope.$emit('reset');
  };

  self.resetTimeout = function () {
    timeout = Timer.setTimeout(function () {
      self.reset();
    }, config.resetTimeout);
  };

  self.on('reset', function () {
    $state.go(config.initialState);
  });

  $(window).on('touchstart', self.resetTimeout);

  self.resetTimeout();

  return self;
})

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