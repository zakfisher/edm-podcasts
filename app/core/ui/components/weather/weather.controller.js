module.exports = function($scope, $interval, config, Weather, Preloader, API, Hardware) {

  // Supply $scope to Weather Service
  Weather.supply($scope);

  // Display weather and set update interval
  Preloader.whenFinished().then(function() {
    var hardware = Hardware.get();
    $scope.class = {
      tall: hardware.screen.size === 'tall', 
      wide: hardware.screen.size === 'wide'
    };
    Weather.display();
    $interval(Weather.update, config.UI.weatherInterval);
  });

};