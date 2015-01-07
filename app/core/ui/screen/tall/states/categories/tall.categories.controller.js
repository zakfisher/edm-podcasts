module.exports = function ($famous, $scope, Utils, Preloader, Categories, TallCategories) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  // Supply $scope to TallCategories Service
  $scope.service = TallCategories;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  $scope.state = {
    size:      [window.innerWidth-360, window.innerHeight-800],
    translate: [180, 360, 0]
  };

  $scope.title = {
    size: [undefined, 0],
    text: 'Select a Category'
  };

  $scope.grid = {
    size:      [undefined, window.innerHeight-1200],
    translate: [0, 70, 0],
    options: {
      dimensions: [3, 1] // columns, rows
    }
  };

  $scope.search = {
    size:      [undefined, 200],
    translate: [0, window.innerHeight-1100, 0]
  };

  // API Dependencies
  Preloader.whenFinished().then(function() {
    $scope.grid.columns = Utils.arrayToColumns(Categories.get(), 3);
  });

};