module.exports = angular.module('WideEvents', [])

.controller('WideEventsCtrl', require('./wide.events.controller'))
  
.service('WideEvents', require('./wide.events.service'));