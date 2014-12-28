module.exports = function ($famous, $scope, Widescreen, Preloader) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.opacity = new Transitionable(0);
  $scope.duration = 500;

  // Supply $scope to Widescreen Service
  Widescreen.supply($scope);

  Preloader.whenFinished().then(function() {
    Widescreen.show();
  });
};