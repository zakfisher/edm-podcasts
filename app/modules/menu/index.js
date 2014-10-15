module.exports = angular.module('KioskMenu', [])

.service('KioskMenu', function () {
  var menu = {};
  menu.active = true;

  menu.toggle = function () {
    console.log('toggle menu');
    menu.active = !menu.active;
  };

  return menu;
})

.directive('kioskmenu', function () {
  return {
    restrict: 'E',
    template: require('./menu.html'),
    controller: function ($scope, KioskMenu) {
      $scope.menu = KioskMenu;
      $scope.menuItems = [
        {
          label: 'Item 1'
        },
        {
          label: 'Item 2'
        },
        {
          label: 'Item 3'
        },
        {
          label: 'Item 4'
        }
      ];
      $scope.menuLayoutOptions = {
        dimensions: [1, $scope.menuItems.length],
      };

    }
  };
});