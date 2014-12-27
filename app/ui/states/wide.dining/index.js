module.exports = angular.module('WideDining', [])

.controller('WideDiningCtrl', require('./wide.dining.controller'))
  
.service('WideDining', require('./wide.dining.service'));