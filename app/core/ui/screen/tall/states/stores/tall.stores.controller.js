module.exports = function ($famous, $scope, $stateParams, Utils, Preloader, Categories, Stores, TallStores) {

	var Transitionable = $famous['famous/transitions/Transitionable'];

	// Supply $scope to TallStores Service
	$scope.service = TallStores;
	$scope.service.supply($scope);

	// Display Settings
	$scope.duration = 500;
	$scope.opacity = new Transitionable(0);

	$scope.state = {
	  size:      [window.innerWidth-360, window.innerHeight-800],
	  translate: [180, 360, 0]
	};

	$scope.title = {
    size: [undefined, 0]
  };

  $scope.grid = {
    size:      [undefined, window.innerHeight-1200],
    translate: [0, 70, 0],
    options: {
      dimensions: [3, 1] // columns, rows
    }
  };

	// API Dependencies
	Preloader.whenFinished().then(function() {
		// Get Stores By Category
		var categoryCode = $stateParams.categoryId;
		if (categoryCode.length > 0) {
			$scope.title.text = Categories.getCategoryByCode(categoryCode).name;
			$scope.grid.columns = Utils.arrayToColumns(Stores.getStoresByCategory(categoryCode), 3);
		}
	});
};