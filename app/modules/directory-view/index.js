module.exports = angular.module('DirectoryView', [])

.directive('directory', function () {
  return {
    restrict: 'E',
    template: require('./directory.html'),
    controller: function ($scope) {
      $scope.directoryLayoutOptions = {};
    }
  };
});