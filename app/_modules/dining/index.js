// Wayfinding Home View

module.exports = angular.module('Dining', [])

.controller('Dining', function ($scope, $famous, $http, CategoryService) {
  $scope.directoryTitle = 'Dining';

  // @todo check how hungry this is on memory. Looks ripe for optimisation.
  $scope.categories = CategoryService.getChildCategoriesOf('fooddrink');
  $scope.categories.unshift({
    name: 'All Dining Choices',
    code: 'fooddrink'
  });

  $scope.currentCategoryName = 'All Dining Choices';
  $scope.filterCategory = 'fooddrink';

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('dining', {
    url: '/dining',
    template: require('./dining.html'),
    controller: 'Dining'
  });
});