module.exports = angular.module('StoreService', [])

.run(function (StoreService, Preloader, $http) {

  //Preload Stores on boot
  var storesTask = Preloader.createTask('Get Stores');
  var getStores = function () {
    console.log('trying to get stores');
    $http({
      method: 'GET',
      cache: true,
      url: "http://api.westfield.io/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all"
    }).success(function (r) {
      StoreService.setStores(r);
      storesTask.resolve();
    }).error(function () {
      // getStores();
      console.warn('could not get stores!');
    });
  };

  getStores();

})

.service("StoreService", function ($http, filterFilter) {

  var self = {};

  self.setStores = function (stores) {
    self.stores = stores.slice(0);
  };

  self.getStores = function () {
    return self.stores.slice(0);
  };

  self.getStoreById = function (_id) {
    var results, store;
    results = filterFilter(self.stores, {
      'id': _id
    });
    if (results.length === 1) {
      return results[0];
    }
  };

  self.getStoresByCategory = function (category) {
    var stores;
    stores = filterFilter(self.stores, {
      'category_codes': category
    });
    return stores;
  };

  return self;

});