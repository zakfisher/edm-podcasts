// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($rootScope, $scope, $famous, StoreService, CardStream, LargescreenMenu) {
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
      var filteredResults = [];
      results.forEach(function(result) {
        if (result !== undefined) {
          filteredResults.push(result);
        }
      });
      results = filteredResults;
    }
    console.log('map results', results);
    if ($scope.isLargescreen) {
      $scope.results = LargescreenMenu.arrayToGrid(results, 3);
    }
    else {
      $scope.results = results;
    }
    console.log('results', $scope.results);
  });

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.search = {};

  $rootScope.keyboard = {
    fadeIn: function(duration) {
      $scope.search.options.keyboard.opacity.set(1, {duration: duration});
      $scope.search.options.keyboard.translate.set([0, 400, 0], {duration: duration});
    },
    fadeOut: function(duration) {
      $scope.search.options.keyboard.opacity.set(0, {duration: duration});
      $scope.search.options.keyboard.translate.set([0, 300, 0], {duration: duration});
    }
  };

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
      searchIcon: {
        size:      [62, 59],
        translate: [50, -55, 0]
      },
      query: {
        background: {
          bgColor:   'black',
          translate: [0, 0, -1]
        },
        text: {
          size:      [500, 50],
          translate: [150, -45, 0]
        },
        placeholder: {
          text: 'Start Typing'
        }
      },
      results: {
        bgColor: '#231f20',
        grid: {
          size:      [750, 500],
          translate: [50, -120, 0],
          options: {
            dimensions: [3, 1], // columns, rows
          }
        }
      },
      keyboard: {
        bgColor:   'transparent',
        // bgColor:   '#231f20',
        align:     [0.5, 0],
        origin:    [0.5, 0],
        size:      [750, 250],
        opacity:   new Transitionable(0),
        translate: new Transitionable([0, 300, 0])
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