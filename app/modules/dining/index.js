// Wayfinding Home View

module.exports = angular.module('Dining', [])

.controller('Dining', function ($scope, $famous, $http) {
  //Urls for directory
  $scope.storesUrl = "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all";
  $scope.categoriesUrl = "http://www.westfield.com.au/api/category/master/store-categories/valleyfair.json";

  //Get All Categories
  $http({
    method: 'GET',
    cache: true,
    url: $scope.categoriesUrl
  }).success(function (r) {
    console.log('\n\ncategories', r);
    $scope.categories = r[0].children;
    $scope.categories.unshift({
      name: "All Dining Choices",
      code: "fooddrink"
    });
    $scope.filterCategory = "fooddrink";
  });

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('dining', {
    url: '/dining',
    template: require('./dining.html'),
    controller: 'Dining'
  });
});