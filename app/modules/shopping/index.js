// Wayfinding Home View

module.exports = angular.module('Shopping', [])

.controller('Shopping', function ($scope, $famous, $http) {
  console.log("Shopping Module");

  var EventHandler = $famous['famous/core/EventHandler'];

  $scope.myEventHandler = new EventHandler();
  $scope.myEventHandler2 = new EventHandler();
  $scope.views = [];
  $scope.stores = [];
  $scope.currentCategoryName = 'All Stores';
  $scope.headerRotation = Math.PI / 2;

  $scope.categoryClickHandler = function (category) {
    $scope.filterCategory = category.code;
    $scope.currentCategoryName = category.name;
  };

  $http({
    method: 'GET',
    url: "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(function (r) {
    $scope.stores = r;
  });

  //Get All Stores
  $http({
    method: 'GET',
    url: "http://www.westfield.com.au/api/category/master/categories.json?centre_id=valleyfair&country=us&per_page=all"
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