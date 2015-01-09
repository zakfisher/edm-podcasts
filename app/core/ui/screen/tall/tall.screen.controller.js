module.exports = function ($famous, $scope, $timeout, config, Preloader, Tallscreen, TallCategories, TallStores, TallSearch) {
  
  var Transitionable = $famous['famous/transitions/Transitionable'];

  // Supply $scope to Tallscreen Service
  $scope.service = Tallscreen;
  $scope.service.supply($scope);

  // Set current state to default state
  $scope.defaultState = $scope.currentState = config.UI.defaultState['tall'];

  // State Settings
  // - this allows states to access each other
  $scope.states = {
    categories: {
      active: ($scope.defaultState == 'categories'),
      service: TallCategories
    },
    search: {
      active: ($scope.defaultState == 'search'),
      service: TallSearch
    },
    stores: {
      active: ($scope.defaultState == 'stores'),
      service: TallStores
    }
  };

  // Display Settings
  $scope.opacity = new Transitionable(0);
  $scope.duration = 500;

  $scope.layout = {
    options: {
      direction:  1,
      headerSize: 260,
      footerSize: 150
    }
  };

  $scope.header = {
    size:      [window.innerWidth-100, $scope.layout.options.headerSize],
    translate: [50, 0, 0]
  };

  $scope.currentTime = {
    size: [undefined, 0],
    translate: [0, 20, 0]
  };

  $scope.weather = {
    summary: {
      size: [undefined, 0],
      translate: [0, 110, 0]
    },
    currentTemp: {
      size: [undefined, 0],
      translate: [0, 150, 0]
    }
  };

  $scope.background = {
    color:  'rgba(255, 255, 255, .8)',
    align:  [0.5, 0],
    origin: [0.5, 0],
    size:   [window.innerWidth-220, undefined]
  };

  $scope.title = {
    text:      'STORE DIRECTORY',
    size:      [400, 240],
    translate: [180, 100, 0]
  };

  $scope.goBack = {
    text:      'Back to Categories',
    size:      [200, 50],
    translate: [180, window.innerHeight-500, 0]
  };

  // Fade in screen when default state is ready
  Preloader.whenFinished().then(function() {
    $timeout(Tallscreen.show, config.UI.preloaderTimeout + 100);
  });

};