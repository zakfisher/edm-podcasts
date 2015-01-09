module.exports = function ($element, $attrs, $scope, Keyboard) {
  
  $scope.touchStart = function () {
    Keyboard.keyFire($attrs.keyboardkey);
    $element.attr('class', 'active');
    $scope.$apply();
  };

  $scope.touchEnd = function () {
    if ($attrs.keyboardkey == 'shift') return;
    $element.attr('class', '');
    $scope.$apply();
  };

  $element[0].addEventListener('touchstart', $scope.touchStart);
  $element[0].addEventListener('touchend', $scope.touchEnd);
  
};