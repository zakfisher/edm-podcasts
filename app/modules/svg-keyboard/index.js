// Wayfinding Home View

module.exports = angular.module('keyboard', [])

.directive('keyboard', function () {
  return {
    restrict: 'E',
    template: require('./keyboard.html'),
    replace: true,
    controller: function ($scope) {
      $scope.keyFire = function (k) {
        switch (k) {
        case 'space':
          $scope.string += " ";
          break;
        case 'delete':
          $scope.string = $scope.string.substring(0, $scope.string.length - 1);
          break;
        case 'go':
          alert($scope.string);
          break;
        case 'shift':
          $scope.keyboardShift = true;
          break;
        default:
          if ($scope.keyboardShift) {
            k = k.toUpperCase();
          }
          $scope.string += k;
          $scope.keyboardShift = false;
        }
        $scope.onKeyboardChange($scope.string);
      };
    }
  };
})

.directive('keyboardkey', function () {
  return {
    restrict: 'A',
    controller: function ($element, $attrs, $scope) {
      $element.on('click', function () {
        $scope.keyFire($attrs.keyboardkey);
        $scope.$apply();
      });
      $element[0].addEventListener('touchstart', function (e) {

        $scope.keyFire($attrs.keyboardkey);
        $element.attr('class', 'active');
        $scope.$apply();
      });
      $element[0].addEventListener('touchend', function () {
        $element.attr('class', '');
        $scope.$apply();
      });
    }
  };
});