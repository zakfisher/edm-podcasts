// Wayfinding Home View

module.exports = angular.module('Dining', [])

.controller('Dining', function ($scope, $famous, $http) {
  //Urls for directory
  $scope.storesUrl = "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all";
  $scope.categoriesUrl = "http://www.westfield.com.au/api/category/master/categories/fooddrink.json?centre_id=valleyfair&country=us&per_page=all";

  //Get All Categories
  $http({
    method: 'GET',
    url: $scope.categoriesUrl
  }).success(function (r) {
    console.log('categories', r);
    $scope.categories = r.children;
    $scope.categories.unshift({
      name: "All Dining Choices",
      code: "fooddrink"
    });
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