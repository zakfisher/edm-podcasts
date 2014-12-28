module.exports = angular.module('wfTime', [])

.controller('TimeCtrl', require('./time.controller'))

.service('Time', require('./time.service'))

.directive('time', function($interval, dateFilter) {
  return {
  	restrict: 'E',
  	template: require('./time.html'),
    controller: 'TimeCtrl',
    link: function($scope, element, attrs) {
      var format, timeoutId;

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
})