module.exports = function ($timeout, $famous, $scope, $stateParams, Utils, Preloader, Categories, Stores, TallStores) {

	var Transitionable = $famous['famous/transitions/Transitionable'];

	// Supply $scope to TallStores Service
	TallStores.supply($scope);

	// Display Settings
	$scope.duration = 500;
	$scope.opacity = new Transitionable(0);

	var stateWidth = window.innerWidth-360;
	$scope.state = {
	  size:      [stateWidth, window.innerHeight-800],
	  translate: [180, 360, 0]
	};

	$scope.title = {
    size: [undefined, 0]
  };

  $scope.selectStore = TallStores.selectStore;
  $scope.stores = {
    size:      [undefined, window.innerHeight-1200],
    translate: [0, 100, 0],
    options: {
      dimensions: [3, 1] // columns, rows
    }
  };

  $scope.activeFloor = false;
  $scope.floorSelector = {
  	size:      [0, 0],
  	header: {
      size:      [300, 30],
      translate: [0, 0, 0],
      text:      'Tap to show stores on:'
    },
    grid: {
      translate: [0, 30, 0]
    },
  	click: TallStores.selectFloor
  };

	// API Dependencies
	Preloader.whenFinished().then(function() {

		// Get Stores By Category
		var categoryCode = $stateParams.categoryId;
		if (categoryCode.length > 0) {
			$scope.title.text = Categories.getCategoryByCode(categoryCode).name;

			// Store List Settings
			var stores = Stores.getStoresByCategory(categoryCode);
			// If less than 3 stores, grid won't display any
			while (stores.length < 3) stores.push({});
			$scope.stores.columns = Utils.arrayToColumns(stores, 3);

			// Floor Selector Settings
			// @todo: get floors from jibestream api
		  var floors = [
		    { level: 1 },
		    { level: 2 }
		  ];
		  $scope.floorSelector.translate = [2*(stateWidth/3), 0, 0];
		  $scope.floorSelector.grid.size = [floors.length * 60, 50];
		  $scope.floorSelector.grid.options = {
		    dimensions: [floors.length, 1] // columns, rows
		  };
		  $scope.floorSelector.grid.columns = Utils.arrayToColumns(floors, floors.length);
		}

		// If no category code is specified, redirect back to categories view
		else {
			$timeout(TallStores.goBack, 1000);
		}

	});
};