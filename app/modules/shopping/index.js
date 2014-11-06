// Wayfinding Home View

module.exports = angular.module('Shopping', [])

.controller('Shopping', function ($scope, $famous, $http) {
  console.log("Shopping Module");

  var EventHandler = $famous['famous/core/EventHandler'];

  $scope.myEventHandler = new EventHandler();
  $scope.myEventHandler2 = new EventHandler();
  $scope.views = [];
  $scope.stores = [];

  $scope.categoryClickHandler = function (category) {
    $scope.filterCategory = category.code;
  };

  $http({
    method: 'GET',
    url: "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(function (r) {
    $scope.stores = r;
  });

  $http({
    method: 'GET',
    url: "http://www.westfield.com.au/api/category/master/categories.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(function (r) {
    console.log('categories', r);
    $scope.categories = r;

  });

  for (var i = 0; i < 1000; i++) {
    $scope.views.push({
      color: "#444"
    });
    $scope.views.push({
      color: "#777"
    });
  }


})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('shopping', {
    url: '/shopping',
    template: require('./shopping.html'),
    controller: 'Shopping'
  });
});