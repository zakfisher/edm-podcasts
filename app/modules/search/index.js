// Wayfinding Home View

module.exports = angular.module('Search', [])

.controller('Search', function ($scope, $famous) {
  console.log("Search Module");
  var EventHandler = $famous['famous/core/EventHandler'];

  $scope.myEventHandler = new EventHandler();

  $scope.string = "";
  $scope.onKeyboardChange = function (a) {
    $scope.string = a;
  };

  $scope.$watch('string', function (a, b) {
    var r;
    if (!a) {
      r = [];
    } else if (a && a !== b) {
      r = JMap.getSearchByQuery(a);
      console.log(a, r);
    }
    $scope.results = r;
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