// Wayfinding Home View

module.exports = angular.module('Map', [])

.controller('Map', function ($scope, $famous, KioskMenu) {
  KioskMenu.expand();
  KioskMenu.show();
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('kioskmap', {
    url: '/map',
    template: require('./map.html'),
    controller: 'Map'
  });
});