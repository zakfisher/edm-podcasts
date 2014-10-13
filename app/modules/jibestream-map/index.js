// Jibestream Integration

module.exports = angular.module('JibestreamMap', [])

.controller('JibestreamMapController', function ($scope) {
  console.log('init jibestream map');
})

.directive('jmap', function () {
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});