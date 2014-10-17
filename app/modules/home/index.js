// Wayfinding Home View

module.exports = angular.module('wayfindingMap', [])

.controller('KioskHome', function ($scope, $famous) {
  $scope.message = "Wayfinding Prototype Home";

  $scope.search = {
    query: '',
    results: []
  };

  $scope.$watch('search.query', function (a, b) {
    var r;
    if (!a) {
      r = [];
    } else if (a && a !== b) {
      r = JMap.getSearchByQuery(a);
      console.log(a, r);
    }
    $scope.search.results = r;

  });


  console.log('JMap', JMap);
  $scope.bound = {
    tilt: 0
  };
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('map', {
    url: '/',
    template: require('./home.html'),
    controller: 'KioskHome'
  });
});