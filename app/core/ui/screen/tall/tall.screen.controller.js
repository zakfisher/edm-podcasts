module.exports = function ($famous, $scope, $state, Tallscreen, TallCategories, TallStores, TallSearch) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.states = {
    categories: {
      active: true,
      service: TallCategories
    },
    search: {
      active: false,
      service: TallSearch
    },
    stores: {
      active: false,
      service: TallStores
    }
  };

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

  // Supply $scope to Tallscreen Service
  Tallscreen.supply($scope);
};