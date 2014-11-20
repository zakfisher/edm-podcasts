module.exports = angular.module('Largescreen', [])

.controller('Largescreen', function ($scope, $famous, $http, CategoryService, KioskMenu, StoreService, CardStream) {
  KioskMenu.hide();
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.myEventHandler = new EventHandler();

  $scope.gridItemHeight = 40;
  $scope.columnCount = 3;
  $scope.itemsPerPage = 100;
  $scope.allStores = [];

  var categories = CategoryService.getCategories();
  categories.forEach(function (category) {
    $scope.allStores.push({
      'name': category.name,
      'category': true
    });
    StoreService.getStoresByCategory(category.code).forEach(function (store) {
      $scope.allStores.push(store);
    });
  });

  $scope.options = {
    myScrollView: {
      paginated: true,
      speedLimit: 10,
      margin: 50,
      direction: 0,
    }
  };

  $scope.getGridHeight = function (items) {
    var height = Math.ceil(items.length / $scope.columnCount) * $scope.gridItemHeight;
    console.log('grid height', height);
    return height;
  };

  var groups = [];
  var group = [];
  var count = 0;
  $scope.allStores.forEach(function (store, i) {
    group.push(store);
    count++;
    if (count === $scope.itemsPerPage || i === $scope.allStores.length - 1) {
      var items = group.slice(0);
      groups.push({
        items: items,
        gridHeight: $scope.getGridHeight(items),
        gridOptions: {
          dimensions: [$scope.columnCount, Math.ceil(items.length / $scope.columnCount)]
        }
      });
      group = [];
      count = 0;
    }
  });

  $scope.pages = groups;

  console.log($scope.pages);

  $scope.handleItemClick = function (item) {
    CardStream.setStore(item);
    CardStream.show();
  };

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('largescreen', {
    url: '/largescreen',
    template: require('./largescreen.html'),
    controller: 'Largescreen'
  });
});