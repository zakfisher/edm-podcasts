// Wayfinding Home View

module.exports = angular.module('wayfindingMap', [])

.controller('KioskHome', function ($scope, $famous) {
  $scope.message = "Wayfinding Prototype Home";
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('map', {
    url: '/',
    template: require('./home.html'),
    controller: 'KioskHome'
  });
});