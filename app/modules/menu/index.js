module.exports = angular.module('KioskMenu', [])

.service('KioskMenu', function () {
  var menu = {};
  menu.active = true;

  menu.toggle = function () {
    console.log('toggle menu');
    menu.active = !menu.active;
  };

  menu.navigateTo = function (item) {
    console.log('navigate to item', item);
  };

  return menu;
})


.directive('kioskmenu', function () {
  return {
    restrict: 'E',
    template: require('./menu.html'),
    controller: function ($scope, KioskMenu, config) {
      $scope.menu = KioskMenu;
      $scope.menuItems = config.navigationItems;
      $scope.menuLayoutOptions = {
        dimensions: [1, $scope.menuItems.length],
      };
    }
  };
});