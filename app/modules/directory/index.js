module.exports = angular.module('Directory', [])

.directive('directory', function () {
  return {
    restrict: 'E',
    template: require('./directory.html'),
    controller: function ($scope, $famous, $http, filterFilter, $filter, KioskService, CardStream) {

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
        $scope.setStoresList($scope.stores);
      };

      $scope.handleStoreClick = function (store) {
        KioskService.saveState(store);
        CardStream.setStore(store);
        CardStream.show();
      };

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

      // Init

      $http({
        method: 'GET',
        cache: true,
        url: $scope.storesUrl
      }).success(function (r) {
        $scope.stores = r;
        $scope.setStoresList(r);
      });

    }
  };
});