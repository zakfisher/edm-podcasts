module.exports = function ($famous, $scope, Preloader, WideMap) {
	var Transitionable = $famous['famous/transitions/Transitionable'];

  // Supply $scope to WideMap Service
  $scope.service = WideMap;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // API Dependencies
  Preloader.whenFinished().then(function() {

  });

};