module.exports = angular.module('WideMap', [])

.controller('WideMapCtrl', require('./wide.map.controller'))
  
.service('WideMap', require('./wide.map.service'));