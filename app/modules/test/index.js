module.exports = angular.module('wfWayfinding_test', [])

//Controllers
.controller('Test', function ($scope) {
  console.log("Test Page");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('test', {
    url: '/test',
    template: require('./test.html'),
    controller: 'Test'
  });
});