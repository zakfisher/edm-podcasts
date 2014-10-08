// Wayfinding Pair from Kiosk demo page
// Just echos back the major and minor keys from the url generated from scanning the beacon

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