module.exports = function ($rootScope, $famous, config, $state) {
  var service = {},
    Timer = $famous['famous/utilities/Timer'],
    timeout,
    $scope = $rootScope.$new();

  // Reset and event handling logic

  service.on = function (trigger, f, scope) {
    var evt = $scope.$on(trigger, f);
    // If the event is in a scope, unbind it when the scope is removed
    if (scope) {
      scope.$on('destroy', function () {
        evt();
      });
    }
    return evt;
  };

  service.reset = function () {
    $scope.$emit('reset');
  };

  service.resetTimeout = function () {
    timeout = Timer.setTimeout(function () {
      service.reset();
    }, config.resetTimeout);
  };

  service.on('reset', function () {
    $state.go(config.initialView);
  });

  $(window).on('touchstart', service.resetTimeout);

  service.resetTimeout();

  return service;
};