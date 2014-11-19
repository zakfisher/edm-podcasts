module.exports = angular.module('Largescreen', [])

.controller('Largescreen', function ($scope, $famous, $http, CategoryService, KioskMenu) {
  KioskMenu.hide();
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.myEventHandler = new EventHandler();

  var page = {
    gridOptions: {
      dimensions: [30, 2]
    },
    items: [
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      },
      {
        'text': 'grid item'
      }
    ]
  }

  $scope.pages = [page, page, page];

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