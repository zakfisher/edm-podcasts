// Jibestream Integration
module.exports = angular.module('JibestreamMap', [])

.run(function (Preloader, StoreService, CardStream, $rootScope, Map) {
  // Preload maps api data
  var JMapInitTask = Preloader.createTask("Jibestream Bootstrap");
  JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {
    deviceId: 126092,
    languageCode: "en"
  });
  JMap.addListener("StandAloneMapsReady", function () {
    JMapInitTask.resolve();
  });

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

  //Only show map on map view. @todo unhack this
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    if (toState.name === 'kioskmap') {
      Map.show();
    } else {
      Map.hide();
    }
  });

})

.service('Map', function ($rootScope) {
  var self = {};
  self.building = false;

  self.setBuilding = function (building) {
    self.building = building;
  };

  self.reset = function () {
    self.building.resetAllMaps();
  };

  self.show = function () {
    $rootScope.mapShow = true;
  };

  self.hide = function () {
    $rootScope.mapShow = false;
  };

  return self;

})

.controller('JibestreamMapController', function ($scope, $element, CardStream, StoreService, Map) {
  var mapObject = new JMap.Building($element.find(".map-container"), $element.offsetWidth, $element.offsetHeight, JMap._stylingData);
  mapObject.setDefaultLocation();
  Map.setBuilding(mapObject);
})

.directive('jmap', function () {
  // var jmapController = new JibestreamMapController({}, $("#container"));
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});