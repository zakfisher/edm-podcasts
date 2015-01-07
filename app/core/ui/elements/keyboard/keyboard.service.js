  // self.keyFire = function (k) {
  //   switch (k) {
  //   case 'space':
  //     $scope.string += ' ';
  //     break;
  //   case 'delete':
  //     $scope.string = $scope.string.substring(0, $scope.string.length - 1);
  //     break;
  //   case 'go':
  //     // alert($scope.string);
  //     break;
  //   case 'shift':
  //     $scope.keyboardShift = true;
  //     break;
  //   default:
  //     if ($scope.keyboardShift) {
  //       k = k.toUpperCase();
  //     }
  //     $scope.string += k;
  //     $scope.keyboardShift = false;
  //   }

    // $scope.onKeyboardChange($scope.string);

    // $rootScope.resetSearchInput = function () {
    //   $scope.string = '';
    //   $scope.keyFire('delete');
    // };


module.exports = function() {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  return self;
};