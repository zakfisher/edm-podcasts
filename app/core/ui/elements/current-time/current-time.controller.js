module.exports = function($scope, $interval, CurrentTime, Preloader, Hardware) {
  $scope.format = 'h:mm a';

  // Supply $scope to CurrentTime Service
  CurrentTime.supply($scope);

  // Update time every second
  $interval(CurrentTime.update, 1000);

  Preloader.whenFinished().then(function() {
    var hardware = Hardware.get();
    $scope.class = {
      tall: hardware.screen.size === 'tall', 
      wide: hardware.screen.size === 'wide'
    };
  });
};