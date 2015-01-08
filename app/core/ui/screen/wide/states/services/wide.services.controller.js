module.exports = function ($famous, $scope, Preloader, WideServices) {
  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Services';

  // Supply $scope to WideServices Service
  $scope.service = WideServices;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // API Dependencies
  Preloader.whenFinished().then(function() {

  });

};