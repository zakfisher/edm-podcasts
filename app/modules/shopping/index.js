// Wayfinding Home View

module.exports = angular.module('Shopping', [])

.controller('Shopping', function ($scope, $famous) {
  console.log("Shopping Module");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('shopping', {
    url: '/shopping',
    template: require('./shopping.html'),
    controller: 'Shopping'
  });
});