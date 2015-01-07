module.exports = function($scope, Search, Preloader, Hardware) {

  // Supply $scope to Search Service
  Search.supply($scope);

  Preloader.whenFinished().then(function() {
    var hardware = Hardware.get();
    $scope.class = {
      tall: hardware.screen.size === 'tall', 
      wide: hardware.screen.size === 'wide'
    };
  });

};