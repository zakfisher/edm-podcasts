module.exports = function ($http) {
  var self = {};

  // self.preload = function () {
  //   var req = $http({
  //     method: 'GET',
  //     cache: true,
  //     url: 'http://api.westfield.io/api/store/master/stores.json?centre_id=' + Hardware.get().centre.id + '&country=us&per_page=all'
  //   });
  //   req.success(function (r) {
  //     self.set(r);
  //   });
  //   req.error(function () {
  //     console.warn('Could not get stores!');
  //   });
  //   return req;
  // };

  // self.set = function (stores) {
  //   self.stores = stores;
  // };

  // self.get = function () {
  //   return self.stores;
  // };

  return self;
};