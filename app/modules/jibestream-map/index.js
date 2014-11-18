// Jibestream Integration
module.exports = angular.module('JibestreamMap', [])

.run(function (Preloader, StoreService, CardStream, $rootScope) {
  // Preload maps api data
  var JMapInitTask = Preloader.createTask("Jibestream Bootstrap");
  JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {
    deviceId: 126092,
    languageCode: "en"
  });
  JMap.addListener("StandAloneMapsReady", JMapInitTask.resolve);

  var JMapConfigTask = Preloader.createTask("Load Jibestream Config");
  $.ajax({
    url: "/components/jibestream-sdk/jibestreamConfig.json",
    type: "GET",
    dataType: "json",
    complete: function (response) {
      JMap._stylingData = JSON.parse(response.responseText);
      JMapConfigTask.resolve();
    }
  });

  var showStoreCardFromDestination = function (e, destination) {
    var store = StoreService.getStoreById(destination.clientId);
    if (store) {
      console.log('STORE', store);
      CardStream.setStore(store);
      CardStream.show();
      $rootScope.$apply();
    } else {
      console.warn('Could not find store from destination:', destination);
    }
  };

  // @todo change this to the event when clicking on the map
  JMap.addListener("SHOW_DESTINATION", showStoreCardFromDestination);

})

.controller('JibestreamMapController', function ($scope, $element, CardStream, StoreService) {
  var mapObject = new JMap.Building($element.find(".map-container"), $element.offsetWidth, $element.offsetHeight, JMap._stylingData);
  mapObject.setDefaultLocation();
  window.mo = mapObject;
  /*Exposed Calls*/
  function resetMap() {
    mapObject.resetAllMaps();
  }

  // mapObject.showCustomPopupDestination(JMap.getDestinationByClientId("7700"), $("#popup-render-container").html());

})

.directive('jmap', function () {
  // var jmapController = new JibestreamMapController({}, $("#container"));
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});