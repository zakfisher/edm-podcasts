module.exports = angular.module('wfWayfinding_home', [])

//Controllers
.controller('Home', function ($scope) {
  console.log("Home Controller");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./home.html'),
    controller: 'Home'
  });
});