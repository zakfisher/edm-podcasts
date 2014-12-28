module.exports = function ($famous, $scope, Preloader, Transitions) {

	var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.opacity = new Transitionable(0);
  $scope.title = 'Categories';

	Preloader.whenFinished().then(function() {
    Transitions.fadeIn($scope, 500);
  });
};