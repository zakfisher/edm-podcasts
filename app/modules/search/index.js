// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($scope, $famous, StoreService, CardStream) {
  console.log("Search Module");
  var EventHandler = $famous['famous/core/EventHandler'];
  $scope.myEventHandler = new EventHandler();

  $scope.string = "";
  //onKeyboard change provided by svg keyboard directive in search.html
  $scope.onKeyboardChange = function (a) {
    $scope.string = a;
  };

  $scope.handleResultClick = function (result) {
    var store;
    console.log(result);
    store = StoreService.getStoreById(result.clientId);
    CardStream.setStore(store);
    CardStream.show();
  };

  $scope.$watch('string', function (newValue, oldValue) {
    var results;
    if (!newValue) {
      results = [];
    } else if (newValue !== oldValue) {
      results = JMap.getSearchByQuery(newValue);
    }
    $scope.results = results;
  });

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('search', {
    url: '/search',
    template: require('./search.html'),
    controller: 'Search'
  });
});