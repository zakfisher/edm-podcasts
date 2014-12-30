module.exports = function ($famous, $scope, Preloader, WideMap) {

	var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Map';
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // Supply $scope to WideMap Service
  WideMap.supply($scope);

  // Fade in view
  Preloader.whenFinished().then(function() {
    WideMap.show();
  });

};