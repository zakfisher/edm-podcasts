// Wayfinding Home View

module.exports = angular.module('Events', [])

.controller('Events', function ($scope, $famous) {
  console.log("Events Module");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('events', {
    url: '/events',
    template: require('./events.html'),
    controller: 'Events'
  });
});