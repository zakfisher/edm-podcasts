module.exports = function($scope, FloorSelector, Preloader, Hardware) {

  // Supply $scope to FloorSelector Service
  $scope.service = FloorSelector;
  $scope.service.supply($scope);

  // API Dependencies
  Preloader.whenFinished().then(function() {
    var hardware = Hardware.get();
    $scope.class = {
      tall: hardware.screen.size === 'tall', 
      wide: hardware.screen.size === 'wide'
    };
  });

};