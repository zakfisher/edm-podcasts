module.exports = function($scope, $interval, config, Weather, Preloader, API) {
  
  $scope.weather = {
    alignment: [1, 0],
    origin: [1, 0],
    size: [400, 200],
    translation: [-20, 20, 0]
  };

  // Supply $scope to Weather Service
  Weather.supply($scope);

  // Display weather and set update interval
  Preloader.whenFinished().then(function() {
    Weather.display();
    $interval(Weather.update, config.UI.weatherInterval);
  });

};