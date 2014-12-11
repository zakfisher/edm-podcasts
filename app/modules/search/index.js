// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($rootScope, $scope, $famous, StoreService, CardStream, LargescreenMenu) {
  console.log('Search Module');
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.myEventHandler = new EventHandler();
  $scope.isLargescreen = window.isLargescreen;

  $scope.string = '';
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
      results.forEach(function (result) {
        if (result !== undefined) {
          filteredResults.push(result);
        }
      });
      results = filteredResults;
    }
    console.log('map results', results);

    // Large Screen Results
    if ($scope.isLargescreen) {
      $scope.results = (results.length === 0) ? [] : LargescreenMenu.arrayToGrid(results, 3);
    }

    // Small Screen Results
    // - filter by store or restaurant
    else {
      var foodResults = [];
      var storeResults = [];

      results.forEach(function (result) {
        if (result.category.indexOf('Food & Drink') > -1) {
          result.isFood = true;
          foodResults.push(result);
        } else {
          result.isStore = true;
          storeResults.push(result);
        }
      });

      // Both stores & food
      if (storeResults.length > 0 && foodResults.length > 0) {
        $scope.results = [storeResults, foodResults];
      }

      // Neither stores nor food
      if (storeResults.length === 0 && foodResults.length === 0) {
        $scope.results = [];
      }

      // Only Stores
      if (storeResults.length > 0 && foodResults.length === 0) {
        $scope.results = [storeResults, []];
      }

      // Only Food
      if (storeResults.length === 0 && foodResults.length > 0) {
        $scope.results = [foodResults, []];
      }
    }
    console.log('results', $scope.results);
  });

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.search = {};

  $rootScope.keyboard = {
    fadeIn: function (duration) {
      $scope.search.options.keyboard.opacity.set(1, {
        duration: duration
      });
      $scope.search.options.keyboard.translate.set([0, 400, 0], {
        duration: duration
      });
    },
    fadeOut: function (duration) {
      $scope.search.options.keyboard.opacity.set(0, {
        duration: duration
      });
      $scope.search.options.keyboard.translate.set([0, 300, 0], {
        duration: duration
      });
    }
  };

  if ($scope.isLargescreen) {
    $scope.search.options = {
      active: true,
      size: [undefined, 500],
      translate: [0, 100, 0],
      layout: {
        direction: 1,
        headerSize: 150,
        footerSize: 370
      },
      searchIcon: {
        size: [62, 59],
        translate: [50, -55, 0]
      },
      query: {
        background: {
          bgColor: 'black',
          translate: [0, 0, -1]
        },
        text: {
          size: [500, 50],
          translate: [150, -45, 0]
        },
        placeholder: {
          size: [500, 50],
          translate: [150, -45, 0],
          text: 'Start Typing'
        }
      },
      results: {
        bgColor: '#231f20',
        grid: {
          align: [0, 0],
          origin: [0, 0],
          size: [750, 500],
          translate: [50, -120, 0],
          options: {
            dimensions: [3, 1], // columns, rows
          }
        }
      },
      keyboard: {
        bgColor: 'transparent',
        // bgColor:   '#231f20',
        align: [0.5, 0],
        origin: [0.5, 0],
        size: [750, 250],
        opacity: new Transitionable(0),
        translate: new Transitionable([0, 300, 0])
      }
    };
  } else {
    $scope.search.options = {
      active: true,
      size: [undefined, undefined],
      translate: [0, 0, 0],
      layout: {
        direction: 1,
        headerSize: 150,
        footerSize: 370
      },
      query: {
        background: {
          bgColor: 'black',
          translate: [0, 0, -1]
        },
        text: {
          align: [0.5, 0],
          origin: [0.5, 0],
          size: [1100, 100],
          translate: [0, 0, 0]
        },
        placeholder: {
          align: [0.5, 0],
          origin: [0.5, 0],
          size: [1100, 100],
          translate: [100, 70, 0],
          text: 'Search for a store'
        }
      },
      results: {
        bgColor: 'black',
        grid: {
          align: [0.5, 0],
          origin: [0.5, 0],
          size: [960, 500],
          translate: [0, 0, 0],
          options: {
            dimensions: [2, 1], // columns, rows
          }
        }
      },
      keyboard: {
        bgColor: 'black',
        align: [0.5, 0],
        origin: [0.5, 0],
        size: [1055, 370],
        translate: [0, 0, 1]
      }
    };
  }
})

.directive('largescreenSearch', function () {
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