module.exports = angular.module('StoreService', [])

.run(function (StoreService, Preloader, $http, config) {

  //Preload Stores on boot
  var storesTask = Preloader.createTask('Get Stores');
  var getStores = function () {
    $http({
      method: 'GET',
      cache: true,
      url: "http://api.westfield.io/api/store/master/stores.json?centre_id=" + config.centre.id + "&country=us&per_page=all"
      // url: "/cache-data/stores.json"
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

.service('StoreService', function ($http, filterFilter) {

  var self = {};

  self.setStores = function (stores) {
    self.stores = stores.slice(0);
  };

  self.getStores = function () {
    return self.stores.slice(0);
  };

  self.getStoreById = function (_id) {
    var results;
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
    console.log('Found some stores', stores);
    return stores;
  };

  self.getRelatedStoresOf = function (store) {
    var storesInCategory,
      relatedIndex1,
      relatedIndex2,
      related1,
      related2,
      relatedStores;
    storesInCategory = self.getStoresByCategory(store.category_codes);
    storesInCategory.splice(storesInCategory.indexOf(store), 1);
    relatedIndex1 = Math.floor(Math.random() * storesInCategory.length);
    related1 = storesInCategory.splice(relatedIndex1, 1)[0];
    relatedIndex2 = Math.floor(Math.random() * storesInCategory.length);
    related2 = storesInCategory.splice(relatedIndex2, 1)[0];
    relatedStores = [related1, related2];
    console.log('related stores', relatedStores);
    return relatedStores;
  };

  return self;

});
