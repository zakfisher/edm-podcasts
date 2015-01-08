module.exports = function ($famous, $scope, Preloader, WideEvents) {
  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Events';

  // Supply $scope to WideEvents Service
  $scope.service = WideEvents;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // API Dependencies
  Preloader.whenFinished().then(function() {

  });

};