var dependencies = [
  require('./search').name
];

module.exports = angular.module('EDMscreen', dependencies)
.service('Screen', require('./screen.service'));