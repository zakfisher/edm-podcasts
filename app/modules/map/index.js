// Wayfinding Home View

module.exports = angular.module('Map', [])

.controller('Map', function ($scope, $famous, KioskMenu) {
  KioskMenu.expand();
  // $scope.message = "Wayfinding Prototype Home";
  // $scope.search = {
  //   query: '',
  //   results: []
  // };

  // $scope.destinationClick = function (destinationId) {

  //   JMap.storage.maps.building.startWayFinding({}, JMap.getDestinationByClientId(destinationId));
  // };

  // $scope.$watch('search.query', function (a, b) {
  //   var r;
  //   if (!a) {
  //     r = [];
  //   } else if (a && a !== b) {
  //     r = JMap.getSearchByQuery(a);
  //     console.log(a, r);
  //   }
  //   $scope.search.results = r;

  // });

  // $scope.bound = {
  //   tilt: 0
  // };
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('kioskmap', {
    url: '/map',
    template: require('./map.html'),
    controller: 'Map'
  });
});