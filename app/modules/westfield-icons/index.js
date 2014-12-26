module.exports = angular.module('wfIcons', [])

.directive('icon', function () {
  return {
    restrict: 'E',
    template: require('./icon.html'),
    scope: {
      glyph: '='
    },
    controller: function ($scope, $element, $attrs) {
      $scope.iconSrc = '/components/westfield-icons/' + $scope.glyph + '.svg';
      $scope.width = parseInt($attrs.width, 10);
      $scope.height = parseInt($attrs.height, 10);
    }
  };
});