module.exports = angular.module('Directory', [])

.directive('directory', function () {
  return {
    restrict: 'E',
    template: require('./directory.html'),
    controller: function ($scope, $famous, filterFilter, $filter, KioskService, StoreService, CardStream) {

      $scope.directoryLayoutOptions = {};

      var EventHandler = $famous['famous/core/EventHandler'];
      $scope.categoriesEventHandler = new EventHandler();
      $scope.resultsEventHandler = new EventHandler();
      $scope.views = [];
      $scope.stores = [];
      $scope.currentCategoryName = 'All Stores';
      $scope.headerRotation = Math.PI / 2;

      $scope.categoryClickHandler = function (category) {
        $scope.filterCategory = category.code;
        $scope.currentCategoryName = category.name;
        $scope.setStoresList();
      };

      $scope.handleStoreClick = function (store) {
        KioskService.saveState(store);
        CardStream.setStore(store);
        CardStream.show();
      };

      $scope.setStoresList = function () {
        var groupedList = [];
        var stores;
        if ($scope.filterCategory) {
          console.log('getting stores by filter category', $scope.filterCategory);
          stores = StoreService.getStoresByCategory($scope.filterCategory);
        } else {
          stores = StoreService.getStores();
        }
        stores.forEach(function (store, i) {
          if (i % 2) {
            var group = [];
            group.push(stores[i]);
            group.push(stores[i - 1]);
            groupedList.push(group);
          }
        });
        $scope.storesList = groupedList;
      };

      $scope.setStoresList(StoreService.getStores());

    }
  };
});