// Wayfinding Home View

module.exports = angular.module('Services', [])

.controller('Services', function ($scope, $famous) {
  console.log("Services Module");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('services', {
    url: '/services',
    template: require('./services.html'),
    controller: 'Services'
  });
});