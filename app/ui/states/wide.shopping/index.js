module.exports = angular.module('WideShopping', [])

.controller('WideShoppingCtrl', require('./wide.shopping.controller'))
  
.service('WideShopping', require('./wide.shopping.service'));