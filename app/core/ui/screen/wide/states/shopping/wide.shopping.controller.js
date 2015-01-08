module.exports = function ($famous, $scope, Preloader, WideShopping) {
  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Shopping';

  // Supply $scope to WideShopping Service
  $scope.service = WideShopping;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // API Dependencies
  Preloader.whenFinished().then(function() {

  });

};