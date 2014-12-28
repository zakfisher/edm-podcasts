module.exports = function ($famous, $scope, Preloader, TallCategories) {

	var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.title = 'Categories';
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  // Supply $scope to TallCategories Service
  TallCategories.supply($scope);

  // Fade in view
	Preloader.whenFinished().then(function() {
    TallCategories.show();
  });

};