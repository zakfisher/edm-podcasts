module.exports = angular.module('KioskMenu', [])

.service('KioskMenu', function ($famous, $state, $stateParams) {
  var menu = {},
    Transitionable = $famous['famous/transitions/Transitionable'],
    Easing = $famous['famous/transitions/Easing'];

  menu.active = false;
  menu.compactWidth = 120;
  menu.expandedWidth = 430;
  menu.sizeTransitionable = new Transitionable([menu.compactWidth, undefined]);

  menu.toggle = function () {
    console.log('toggle menu');
    menu.active = !menu.active;
  };

  menu.expand = function () {
    menu.sizeTransitionable.set(
      [menu.expandedWidth, undefined], {
        duration: 200,
        curve: Easing.inSine
      }
    );
    menu.active = true;
  };

  menu.contract = function () {
    menu.active = false;
    menu.sizeTransitionable.set([menu.compactWidth, undefined], {
      duration: 200,
      curve: Easing.outSine
    });
  };

  menu.navigateTo = function (item) {
    $state.go(item.type);
    if (item.type !== 'kioskmap') {
      menu.contract();
    }
  };

  menu.handleTap = function (item) {
    menu.navigateTo(item);
  };

  return menu;
})


.directive('kioskmenu', function () {
  return {
    restrict: 'E',
    template: require('./menu.html'),
    controller: function ($scope, KioskMenu, config) {
      $scope.menu = KioskMenu;
      $scope.menuItems = config.states;
      $scope.menuLayoutOptions = {
        dimensions: [1, $scope.menuItems.length],
      };
      $scope.sizeTransitionable = KioskMenu.sizeTransitionable.get();
    }
  };
});