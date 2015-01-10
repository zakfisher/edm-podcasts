module.exports = function ($famous, $scope, Preloader, TallSearch, Keyboard) {

  var Transitionable = $famous['famous/transitions/Transitionable'];

  // Supply $scope to TallSearch Service
  $scope.service = TallSearch;
  $scope.service.supply($scope);

  // Display Settings
  $scope.duration = 500;
  $scope.opacity = new Transitionable(0);

  $scope.state = {
    size:      [window.innerWidth-360, window.innerHeight-800],
    translate: [180, 360, 0]
  };

  $scope.search = {
    execute:   $scope.service.findStores,
    url:       'tall/search',
    size:      [undefined, 200],
    translate: [0, 0, 0],
    icon: {
      size: [70, 70],
      translate: [0, 30, 0]
    },
    query: {
      size: [500, 70],
      translate: [100, 30, 0],
      input: '',
      placeholder: 'SEARCH FOR A STORE'
    }
  };

  $scope.keyboard = {
  	size:      [undefined, 250],
  	translate: [0, window.innerHeight-1200, 0]
  };

  $scope.selectStore = TallSearch.selectStore;
  $scope.stores = {
    size:      [undefined, window.innerHeight-1200],
    translate: [0, 120, 0],
    options: {
      dimensions: [3, 1] // columns, rows
    }
  };

};