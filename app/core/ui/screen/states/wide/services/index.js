module.exports = angular.module('WideServices', [])

.controller('WideServicesCtrl', require('./wide.services.controller'))
  
.service('WideServices', require('./wide.services.service'));