module.exports = angular.module('EDMSearch', [])

.controller('SearchCtrl', require('./search.controller'))
  
.service('Search', require('./search.service'));