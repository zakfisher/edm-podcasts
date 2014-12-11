// Wayfinding Home View

module.exports = angular.module('Map', [])

.controller('Map', function ($scope, $famous, KioskMenu, Map) {
  KioskMenu.expand();
  KioskMenu.show();

  window._map = Map;

  $scope.levels = {
    1: {
      description: 'TEST'
    }
  };

  $scope.levels = Map.building.floors;
  console.log('LEVELS', Map.building.floors);

  $scope.setLevel = function (level) {
    $scope.selectedLevel = level;
    $scope.map.building.switchFloor(level.id, true);
  };

  $scope.map = Map;
  $scope.$watch('map.building.floors', function (a) {
    $scope.levels = a;
    $scope.setLevel($scope.levels[Object.keys(a)[0]]);
  });



})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('kioskmap', {
    url: '/map',
    template: require('./map.html'),
    controller: 'Map'
  });
});