// Wayfinding Map Module
//
module.exports = angular.module('wayfindingMap', [])

.controller('MapHome', function ($scope, $famous) {
  $scope.message = "Wayfinding Prototype";
  console.log('the map controller');
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('map', {
    url: '/',
    template: require('./index.html'),
    controller: 'MapHome'
  });
});