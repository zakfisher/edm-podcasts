module.exports = function ($famous, $scope, Tallscreen, Preloader) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.opacity = new Transitionable(0);
  $scope.duration = 500;

  $scope.layout = {
    options: {
      direction:  1,
      headerSize: 240,
      footerSize: 155
    }
  };

  $scope.header = {
    size:      [window.innerWidth-100, 240],
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
    color: 'rgba(255, 255, 255, .8)',
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