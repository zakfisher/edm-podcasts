// Wayfinding Home View

module.exports = angular.module('Shopping', [])

.run(function ($http, Preloader) {

  var storesTask = Preloader.createTask('Get Stores');
  var categoriesTask = Preloader.createTask('Get Categories');

  $http({
    method: 'GET',
    cache: true,
    url: "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(storesTask.resolve);

  $http({
    method: 'GET',
    cache: true,
    url: "http://www.westfield.com.au/api/category/master/categories.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(categoriesTask.resolve);

})

.controller('Shopping', function ($scope, $famous, $http, filterFilter, $filter, KioskService, CardStream) {
  $scope.storesUrl = "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all";
  $scope.categoriesUrl = "http://www.westfield.com.au/api/category/master/categories.json?centre_id=valleyfair&country=us&per_page=all";

  //Get All Categories
  $http({
    method: 'GET',
    url: $scope.categoriesUrl
  }).success(function (r) {
    console.log('categories', r);
    $scope.categories = r;
    $scope.categories.unshift({
      name: "All Stores",
      code: null
    });
  });

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('shopping', {
    url: '/shopping',
    template: require('./shopping.html'),
    controller: 'Shopping'
  });
});