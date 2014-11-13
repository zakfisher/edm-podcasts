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


.controller('Shopping', function ($scope, $famous, $http, filterFilter, $filter) {
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
    $scope.setStoresList($scope.stores);
  };

  $http({
    method: 'GET',
    url: "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(function (r) {
    $scope.stores = r;
    $scope.setStoresList(r);
  });

  //Get All Categories
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

  $scope.setStoresList = function (stores) {
    var groupedList = [];
    var filteredStores;
    if ($scope.filterCategory) {
      filteredStores = filterFilter(stores, {
        'category_codes': $scope.filterCategory
      });
    } else {
      filteredStores = stores;
    }
    filteredStores.forEach(function (store, i) {
      if (i % 2) {
        var group = [];
        group.push(filteredStores[i]);
        group.push(filteredStores[i - 1]);
        groupedList.push(group);
      }
    });
    $scope.storesList = groupedList;
    console.log($scope.storesList);
  };

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('shopping', {
    url: '/shopping',
    template: require('./shopping.html'),
    controller: 'Shopping'
  });
});