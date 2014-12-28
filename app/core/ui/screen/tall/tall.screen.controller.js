module.exports = function ($famous, $scope, Preloader, Transitions) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.opacity = new Transitionable(0);

  $scope.layout = {
    options: {
      direction: 1,
      headerSize: 240,
      footerSize: 155
    }
  };

  $scope.content = {
    background: {
      align: [0.5, 0],
      origin: [0.5, 0],
      size: [850, undefined]
    }
  };

  Preloader.whenFinished().then(function() {
    Transitions.fadeIn($scope, 500);
  });
};