module.exports = angular.module('StoreService', [])

.run(function (StoreService, Preloader, $http) {

  //Preload Stores on boot
  var storesTask = Preloader.createTask('Get Stores');
  $http({
    method: 'GET',
    cache: true,
    url: "http://www.westfield.com.au/api/store/master/stores.json?centre_id=valleyfair&country=us&per_page=all"
  }).success(function (r) {
    StoreService.setStores(r);
    storesTask.resolve();
  });
})

.service("StoreService", function ($http, filterFilter) {

  var self = {};

  self.setStores = function (stores) {
    self.stores = stores;
  };

  self.getStores = function () {
    return self.stores;
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
    console.log('\n\nstores by category', category, self.stores, stores);
    return stores;
  };

  return self;

});