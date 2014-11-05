// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($scope, $famous) {
  console.log("Search Module");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('search', {
    url: '/search',
    template: require('./search.html'),
    controller: 'Search'
  });
});