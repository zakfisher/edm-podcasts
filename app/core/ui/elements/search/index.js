module.exports = angular.module('wfSearch', [])

.controller('SearchCtrl', require('./search.controller'))

.service('Search', require('./search.service'))

.directive('search', function () {
  return {
    restrict: 'E',
    template: require('./search.html'),
    controller: 'SearchCtrl'
  };
});