module.exports = function ($scope, $famous, $state, config, Preloader) {

  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Timer = $famous['famous/utilities/Timer'];

  $scope.spinner = {
    speed: 55
  };
  $scope.rotateY = new Transitionable(0);

  //run function on every tick of the Famo.us engine
  Timer.every(function () {
    var adjustedSpeed = parseFloat($scope.spinner.speed) / 800;
    $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
  }, 1);

  Preloader.whenFinished().then(function () {
    $state.go(config.initialView);
    // $rootScope.mapReady = true;
    // KioskMenu.show();
  });
};