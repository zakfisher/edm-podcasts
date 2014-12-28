module.exports = function ($famous, $scope, Tallscreen, Preloader) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.opacity = new Transitionable(0);
  $scope.duration = 500;

  $scope.layout = {
    options: {
      direction: 1,
      headerSize: 240,
      footerSize: 155
    }
  };

  $scope.content = {
    background: {
      color: 'rgba(255, 255, 255, .8)',
      align: [0.5, 0],
      origin: [0.5, 0],
      size: [850, undefined]
    }
  };

  // Supply $scope to Tallscreen Service
  Tallscreen.supply($scope);

  Preloader.whenFinished().then(function() {
    Tallscreen.show();
  });
};