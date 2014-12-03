module.exports = angular.module('LargescreenWeather', [])

.directive('largescreenWeather', function (WeatherService, $interval) {
  return {
    restrict: 'E',
    template: require('./largescreen-weather.html'),
    controller: function($scope) {
      $scope.weather = {
        alignment: [1, 0],
        origin: [1, 0],
        size: [400, 200],
        translation: [-20, 20, 0]
      };
      function displayWeather() {
        var currentTemp = WeatherService.getCurrentTemp();
        var summary = WeatherService.getSummary();
        angular.extend($scope.weather, {
          currentTemp: currentTemp,
          summary: summary
        });
      }
      displayWeather();
      $interval(function() {
        WeatherService.cache();
        displayWeather();
      }, 5000);
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