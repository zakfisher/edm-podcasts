module.exports = angular.module('KioskMenu', [])

.controller('KioskMenuController', function ($scope) {
  console.log('menu controller');

  $scope.menuActive = true;

  $scope.toggleMenu = function () {
    $scope.menuActive = !$scope.menuActive;
    console.log('set menuActive', $scope.menuActive);
  };

})

.directive('kioskmenu', function () {
  return {
    restrict: 'E',
    controller: 'KioskMenuController',
    template: require('./menu.html')
  };
});