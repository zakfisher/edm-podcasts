module.exports = angular.module('TallStores', [])
.controller('TallStoresCtrl', require('./tall.stores.controller'))
.service('TallStores', require('./tall.stores.service'));