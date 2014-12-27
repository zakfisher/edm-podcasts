module.exports = angular.module('WideSearch', [])

.controller('WideSearchCtrl', require('./wide.search.controller'))
  
.service('WideSearch', require('./wide.search.service'));