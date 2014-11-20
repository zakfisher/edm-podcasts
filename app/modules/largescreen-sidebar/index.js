module.exports = angular.module('LargescreenSidebar', [])

.service('LargescreenSidebar', function ($famous, $state, $stateParams, $rootScope) {
  var sidebar = {},
    Transitionable = $famous['famous/transitions/Transitionable'],
    Easing = $famous['famous/transitions/Easing'];

  sidebar.width = 350;
  sidebar.openPosition = [0, 0, 0];
  sidebar.closePosition = [(sidebar.menuWidth * -1), 0, 0];
  sidebar.position = sidebar.openPosition;
  
  sidebar.sizeTransitionable = new Transitionable([sidebar.width, undefined]);

  // sidebar.show = function () {
  //   sidebar.visible = true;
  // };

  return sidebar;
})


.directive('largescreenSidebar', function () {
  return {
    restrict: 'E',
    template: require('./largescreen-sidebar.html'),
    controller: function ($scope, LargescreenSidebar, config) {
      $scope.sidebar = LargescreenSidebar;
      
      $scope.menu = {
        size: [300, undefined]
      };

      $scope.btn = {
        alignment: [1, 0.5],
        origin: [0.5, 0],
        rotation: Math.PI / 2,
        size: [100, 100]
      };

    }
  };
});