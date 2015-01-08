module.exports = function ($famous, $scope, $timeout, config, Preloader, Widescreen, WideDining, WideEvents, WideMap, WideSearch, WideServices, WideShopping) {
  
  var Transitionable = $famous['famous/transitions/Transitionable'];

  // Supply $scope to Widescreen Service
  $scope.service = Widescreen;
  $scope.service.supply($scope);

  // Set current state to default state
  $scope.defaultState = $scope.currentState = config.UI.defaultState['wide'];

  // State Settings
  // - this allows states to access each other
  $scope.states = {
    dining: {
      active: ($scope.defaultState == 'dining'),
      service: WideDining
    },
    events: {
      active: ($scope.defaultState == 'events'),
      service: WideEvents
    },
    map: {
      active: ($scope.defaultState == 'map'),
      service: WideMap
    },
    search: {
      active: ($scope.defaultState == 'search'),
      service: WideSearch
    },
    services: {
      active: ($scope.defaultState == 'services'),
      service: WideServices
    },
    shopping: {
      active: ($scope.defaultState == 'shopping'),
      service: WideShopping
    }
  };

  // Display Settings
  $scope.opacity = new Transitionable(0);
  $scope.duration = 500;

  // Fade in screen when default state is ready
  Preloader.whenFinished().then(function() {
    $timeout(Widescreen.show, config.UI.preloaderTimeout + 100);
  });

};