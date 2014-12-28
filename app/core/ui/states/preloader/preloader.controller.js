module.exports = function ($scope, $famous, Preloader) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.spinner = {
    speed: 55
  };
  $scope.rotateY = new Transitionable(0);
  $scope.distance = -1000;
  $scope.duration = 500;
  $scope.translate = new Transitionable([0, 0, $scope.distance]);
  $scope.opacity = new Transitionable(0);

  // Supply $scope to Preloader Service
  Preloader.supply($scope);

  // Spin the spinner!
  Preloader.spin();
  
  // Fade spinner in
  Preloader.show();

  // Fade spinner out
  Preloader.whenFinished().then(function() {
    Preloader.hide();
  });

};