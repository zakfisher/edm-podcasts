// Wayfinding Home View

module.exports = angular.module('Shopping', [])

.controller('Shopping', function ($scope, $famous, $http, filterFilter, $filter, KioskService, CardStream, CategoryService, LargescreenSidebar) {
  $scope.categories = CategoryService.getCategories();
  $scope.categories.unshift({
    name: "All Stores",
    code: null
  });
  $scope.directoryTitle = "Shopping";
})


//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('shopping', {
    url: '/shopping',
    template: require('./shopping.html'),
    controller: 'Shopping'
  });
});