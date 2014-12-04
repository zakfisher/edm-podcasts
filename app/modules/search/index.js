// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($scope, $famous, StoreService, CardStream, LargescreenMenu) {
  console.log("Search Module");
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.myEventHandler = new EventHandler();
  $scope.isLargescreen = window.isLargescreen;

  $scope.string = "";
  //onKeyboard change provided by svg keyboard directive in search.html
  $scope.onKeyboardChange = function (a) {
    $scope.string = a;
  };

  $scope.handleResultClick = function (result) {
    var store;
    console.log(result);
    store = StoreService.getStoreById(result.clientId);
    CardStream.setStore(store);
    CardStream.show();
  };

  $scope.$watch('string', function (newValue, oldValue) {
    var results;
    if (!newValue) {
      results = [];
    } else if (newValue !== oldValue) {
      results = JMap.getSearchByQuery(newValue);
    }
    if ($scope.isLargescreen) {
      $scope.results = LargescreenMenu.arrayToGrid(results, 3);
    }
    else {
      $scope.results = results;
    }
  });

  $scope.search = {};

  if ($scope.isLargescreen) {
    $scope.search.options = {
      active:    true,
      size:      [undefined, 500],
      translate: [0, 100, 0],
      layout: {
        direction:  1, 
        headerSize: 150, 
        footerSize: 370
      },
      query: {
        background: {
          bgColor:   'black',
          translate: [0, 0, -1]
        },
        text: {
          size:      [500, 50],
          translate: [100, -45, 0]
        },
        placeholder: {
          text: 'Start Typing'
        }
      },
      results: {
        bgColor: '#231f20',
        grid: {
          size:      [750, 500],
          translate: [50, -100, 0],
          options: {
            dimensions: [3, 1], // columns, rows
          }
        }
      },
      keyboard: {
        bgColor:   '#231f20',
        align:     [0.5, 0],
        origin:    [0.5, 0],
        size:      [750, 250],
        translate: [0, 400, 1]
      }
    };
  }
  else {
    $scope.search.options = {
      active:    true,
      size:      [undefined, undefined],
      translate: [0, 0, 0],
      layout: {
        direction:  1, 
        headerSize: 150, 
        footerSize: 370
      },
      query: {
        background: {
          bgColor:   'black',
          translate: [0, 0, -1]
        },
        text: {
          size:      [undefined, 100],
          translate: [0, 0, 0]
        },
        placeholder: {
          text: 'Search for a store'
        }
      },
      results: {
        bgColor: 'black',
        grid: {
          size:      [undefined, 500],
          translate: [0, 0, 0],
          options: {
            dimensions: [3, 1], // columns, rows
          }
        }
      },
      keyboard: {
        bgColor:   'black',
        align:     [0.5, 0],
        origin:    [0.5, 0],
        size:      [1055, 370],
        translate: [0,0,1]
      }
    };
  }
})

.directive('largescreenSidebarSearch', function() {
  return {
    restrict: 'E',
    template: require('./search.html'),
    controller: 'Search'
  };
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('search', {
    url: '/search',
    template: require('./search.html'),
    controller: 'Search'
  });
});