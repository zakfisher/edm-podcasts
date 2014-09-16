module.exports = angular.module('wfWayfinding_home', [])

//Controllers
.controller('Home', function ($scope) {
  console.log("Home Controller", $scope);
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./index.html'),
    controller: 'Home'
  });
});