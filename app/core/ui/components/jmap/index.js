// Jibestream Integration
module.exports = angular.module('JibestreamMap', [])

.controller('JibestreamMapCtrl', require('./jmap.controller'))
.service('JibestreamMap', require('./jmap.service'))

.directive('jmap', function () {
  return {
    restrict: 'E',
    controller: 'JibestreamMapCtrl',
    template: require('./jmap.html')
  };
});

// .run(function (Preloader, StoreService, CardStream, $rootScope, JibestreamMap) {
//   // Preload maps api data
//   var JMapInitTask = Preloader.createTask('Jibestream Bootstrap');
//   JMap.initMapsStandAlone('http://jswestfield.cloudapp.net', {
//     deviceId: 126092,
//     languageCode: 'en'
//   });
//   JMap.addListener('StandAloneMapsReady', function () {
//     JMapInitTask.resolve();
//   });

//   var JMapConfigTask = Preloader.createTask('Load Jibestream Config');
//   $.ajax({
//     url: '/components/jibestream-sdk/jibestreamConfig.json',
//     type: 'GET',
//     dataType: 'json',
//     complete: function (response) {
//       JMap._stylingData = JSON.parse(response.responseText);
//       JMapConfigTask.resolve();
//     }
//   });
//   var showStoreCardFromDestination = function (e, destination) {
//     var store = StoreService.getStoreById(destination.clientId);
//     if (store) {
//       console.log('STORE', store);
//       CardStream.setStore(store);
//       CardStream.show();
//       $rootScope.$apply();
//     } else {
//       console.warn('Could not find store from destination:', destination);
//     }
//   };

//   // @todo change this to the event when clicking on the map
//   JMap.addListener('SHOW_DESTINATION', showStoreCardFromDestination);

//   //Only show map on map view. @todo unhack this
//   $rootScope.$on('$stateChangeStart', function (event, toState) {
//     if (toState.name === 'kioskmap') {
//       JibestreamMap.show();
//     } else {
//       JibestreamMap.hide();
//     }
//   });

// });