module.exports = angular.module('LargescreenSidebar', [])

.service('LargescreenSidebar', function ($famous, $state, $stateParams, $rootScope) {
  var sidebar = {},
    Transitionable = $famous['famous/transitions/Transitionable'],
    Easing = $famous['famous/transitions/Easing'];

  sidebar.size = [309, undefined];

  var openPosition = [0, 0, 0];
  var closePosition = [-254, 0, 0];

  sidebar.positionTransitionable = new Transitionable(closePosition);

  sidebar.getContentHeight = function (floorCount, categoryCount) {
    var contentHeight = 0;
    var listCount = 2;
    var listTitleHeight = 25;
    var listItemHeight = 46;
    var listMarginHeight = 32;
    // Add List Title
    contentHeight += (listCount * listTitleHeight);
    // Add List Margins
    contentHeight += (listCount * listMarginHeight);
    // Add Category List Items
    contentHeight += (categoryCount * listItemHeight);
    // Add Floor List Items
    contentHeight += (floorCount * listItemHeight);
    return contentHeight;
  };

  sidebar.toggle = function() {
    if (sidebar.active) {
      sidebar.contract();
    }
    else {
      sidebar.expand();
    }
  };

  sidebar.expand = function () {
    console.log('expand sidebar');
    sidebar.active = true;
    sidebar.positionTransitionable.set(
      openPosition, {
        duration: 200,
        curve: Easing.inSine
      }
    );
  };

  sidebar.contract = function () {
    console.log('contract sidebar');
    sidebar.active = false;
    sidebar.positionTransitionable.set(
      closePosition, {
        duration: 200,
        curve: Easing.inSine
      }
    );
  };

  sidebar.open = function () {
    console.log('open sidebar');
    sidebar.active = true;
    sidebar.positionTransitionable.set(
      openPosition, 
      { duration: 0 }
    );
  };

  sidebar.close = function () {
    console.log('close sidebar');
    sidebar.active = false;
    sidebar.positionTransitionable.set(
      closePosition, 
      { duration: 0 }
    );
  };

  return sidebar;
})

.directive('largescreenSidebar', function () {
  return {
    restrict: 'E',
    template: require('./largescreen-sidebar.html'),
    controller: function ($scope, LargescreenSidebar, CategoryService) {
      $scope.sidebar = LargescreenSidebar;
      $scope.categories = CategoryService.getCategories();
      $scope.floors = [
        { level: 2 },
        { level: 1 }
      ];

      $scope.menu = {
        size: [274, undefined]
      };

      $scope.content = {
        alignment: [0.5, 0.5],
        origin: [0.5, 0.5],
        size: [184, $scope.sidebar.getContentHeight($scope.floors.length, $scope.categories.length)]
      };

      $scope.btn = {
        alignment: [1, 0.5],
        origin: [0.5, 0],
        rotation: Math.PI / 2,
        size: [160, 45]
      };

      $scope.sidebar.close();

    }
  };
});