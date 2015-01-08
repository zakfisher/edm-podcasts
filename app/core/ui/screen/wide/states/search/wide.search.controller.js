module.exports = function ($famous, $scope, Preloader, WideSearch) {
  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Search';

  // Supply $scope to WideSearch Service
  $scope.service = WideSearch;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // API Dependencies
  Preloader.whenFinished().then(function() {

  });

};