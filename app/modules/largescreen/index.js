module.exports = angular.module('Largescreen', [])

.controller('Largescreen', function ($scope, $famous, $http, CategoryService, KioskMenu) {
  KioskMenu.hide();
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.myEventHandler = new EventHandler();
  $scope.pages = [{
    content: "Scroll",
    color: "rgba(255,255,255,0.2)"
  }, {
    content: "horizontally",
    color: "rgba(255,255,255,0.4)"
  }, {
    content: "yay!",
    color: "rgba(255,255,255,0.2)"
  }, {
    content: "woo!",
    color: "rgba(255,255,255,0.4)"
  }];

  $scope.options = {
    myScrollView: {
      // clipSize: 100,
      paginated: true,
      speedLimit: 5,
      direction: 0,
    }
  };

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('largescreen', {
    url: '/largescreen',
    template: require('./largescreen.html'),
    controller: 'Largescreen'
  });
});