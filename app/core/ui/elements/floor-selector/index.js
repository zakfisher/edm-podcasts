module.exports = angular.module('wfFloorSelector', [])

.controller('FloorSelectorCtrl', require('./floor-selector.controller'))

.service('FloorSelector', require('./floor-selector.service'))

.directive('floorSelector', function () {
  return {
    restrict: 'E',
    template: require('./floor-selector.html'),
    controller: 'FloorSelectorCtrl'
  };
});