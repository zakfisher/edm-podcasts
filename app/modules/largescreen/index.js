module.exports = angular.module('Largescreen', [])

.controller('Largescreen', function ($scope, $famous, $http, CategoryService, KioskMenu) {
  KioskMenu.hide();
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('largescreen', {
    url: '/largescreen',
    template: require('./largescreen.html'),
    controller: 'Largescreen'
  });
});