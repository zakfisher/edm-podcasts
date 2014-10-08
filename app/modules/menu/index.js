module.exports = (function () {

  var app = angular.module('wfMenu', []);

  app.controller('MenuController', function ($scope) {
    console.log('menu controller');
  });

  app.config(function ($stateProvider) {
    $stateProvider.state('menutest', {
      url: '/menutest',
      // template: require('./index.html'),
      controller: 'MenuController'
    });
  });

  return app;
}());