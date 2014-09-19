// Wayfinding Map Module
//
module.exports = angular.module('wayfindingPairFromKiosk', [])

.controller('PairFromKiosk', function ($scope, $famous, $stateParams) {
  console.log('PairFromKiosk', $stateParams);
  $scope.major = $stateParams.major;
  $scope.minor = $stateParams.minor;
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('pair-from-kiosk', {
    url: '/pair-from-kiosk/:major/:minor',
    template: require('./index.html'),
    controller: 'PairFromKiosk'
  });
});