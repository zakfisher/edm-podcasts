module.exports = function($scope, Keyboard, Preloader, Hardware) {

  // Supply $scope to Keyboard Service
  Keyboard.supply($scope);

  Preloader.whenFinished().then(function() {
    var hardware = Hardware.get();
    $scope.class = {
      tall: hardware.screen.size === 'tall', 
      wide: hardware.screen.size === 'wide'
    };
  });

};