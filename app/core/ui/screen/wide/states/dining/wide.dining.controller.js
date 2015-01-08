module.exports = function ($famous, $scope, Preloader, WideDining) {
  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Dining';

  // Supply $scope to WideDining Service
  $scope.service = WideDining;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // API Dependencies
  Preloader.whenFinished().then(function() {

  });

};