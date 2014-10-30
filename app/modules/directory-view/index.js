module.exports = angular.module('Directory', [])

.directive('directory', function () {
  return {
    restrict: 'E',
    template: require('./directory.html'),
    controller: function ($scope) {
      $scope.directoryLayoutOptions = {};
    }
  };
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('directory', {
    url: '/directory/:target',
    template: require('./directory.html')
  });
});