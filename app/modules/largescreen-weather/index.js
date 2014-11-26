module.exports = angular.module('LargescreenWeather', [])

.directive('largescreenWeather', function (WeatherService) {
  return {
    restrict: 'E',
    template: require('./largescreen-weather.html'),
    controller: function($scope) {
      console.log(WeatherService.getWeather());
      var currentTemp = WeatherService.getCurrentTemp();
      var summary = WeatherService.getSummary();
      $scope.weather = {
        alignment: [1, 0],
        origin: [1, 0],
        size: [400, 200],
        translation: [-50, 50, 0],
        currentTemp: currentTemp,
        summary: summary
      };
    }
  };
})

.directive('currentTime', function($interval, dateFilter) {
  return {
    controller: function($scope) {
      // $scope.format = 'M/d/yy h:mm:ss a';
      $scope.format = 'h:mm a';
    },
    link: function($scope, element, attrs) {
      var format,
          timeoutId;

      function updateTime() {
        element.text(dateFilter(new Date(), $scope.format));
      }

      $scope.$watch(attrs.myCurrentTime, function(value) {
        format = value;
        updateTime();
      });

      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      // Update time every second
      timeoutId = $interval(updateTime, 1000);
    }
  };
});