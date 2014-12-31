module.exports = angular.module('TallSearch', [])

.controller('TallSearchCtrl', require('./tall.search.controller'))
  
.service('TallSearch', require('./tall.search.service'));