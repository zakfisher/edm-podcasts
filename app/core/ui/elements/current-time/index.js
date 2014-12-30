module.exports = angular.module('wfCurrentTime', [])

.controller('CurrentTimeCtrl', require('./current-time.controller'))

.service('CurrentTime', require('./current-time.service'))

.directive('currentTime', function() {
  return {
  	restrict: 'E',
  	template: require('./current-time.html'),
    controller: 'CurrentTimeCtrl'
  };
});