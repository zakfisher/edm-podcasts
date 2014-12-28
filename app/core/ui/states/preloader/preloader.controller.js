module.exports = function ($scope, $famous, Preloader, Transitions) {

  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Timer = $famous['famous/utilities/Timer'];

  // Spin the spinner!
  $scope.spinner = {
    speed: 55
  };
  $scope.rotateY = new Transitionable(0);
  //run function on every tick of the Famo.us engine
  Timer.every(function () {
    var adjustedSpeed = parseFloat($scope.spinner.speed) / 800;
    $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
  }, 1);

  // Fade spinner in
  var distance = -1000;
  var duration = 500;
  $scope.translate = new Transitionable([0, 0, distance]);
  $scope.opacity = new Transitionable(0);
  Transitions.comeForward($scope, duration);

  // Fade spinner out
  Preloader.whenFinished().then(function() {
    Transitions.goBack($scope, duration, distance);
  });

};