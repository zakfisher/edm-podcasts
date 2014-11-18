// Wayfinding Home View

module.exports = angular.module('Shopping', [])

.controller('Shopping', function ($scope, $famous, $http, filterFilter, $filter, KioskService, CardStream, CategoryService) {
  $scope.categories = CategoryService.getCategories();
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('shopping', {
    url: '/shopping',
    template: require('./shopping.html'),
    controller: 'Shopping'
  });
});