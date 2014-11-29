// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($scope, $famous, StoreService, CardStream, LargescreenSidebar) {
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
      $scope.results = LargescreenSidebar.arrayToGrid(results, 3);
    }
    else {
      $scope.results = results;
    }
  });

  if ($scope.isLargescreen) {
    $scope.options = {
      size: [undefined, 500],
      translate: [0, 800, 0],
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
          size: [500, 100],
          translate: [100, 55, 0]
        },
        placeholder: {
          text: 'Search for a store'
        }
      },
      results: {
        bgColor: '#231f20',
        grid: {
          size:      [undefined, 500],
          translate: [0, 0, 0],
          options: {
            dimensions: [3, 1], // columns, rows
          }
        }
      },
      keyboard: {
        bgColor:   '#231f20',
        align:     [0.5, 0],
        origin:    [0.5, 0],
        size:      [0.6*1055, 0.6*370],
        translate: [-20, 500, 1]
      }
    };
    console.log('options', $scope.options);
  }
  else {
    $scope.options = {
      size: [undefined, undefined],
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
          size: [undefined, 100]
        }
      },
      results: {
        bgColor: 'black'
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