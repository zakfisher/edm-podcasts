// Wayfinding Home View

module.exports = angular.module('Dining', [])

.controller('Dining', function ($scope, $famous) {
  console.log("Dining Module");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('dining', {
    url: '/dining',
    template: require('./dining.html'),
    controller: 'Dining'
  });
});