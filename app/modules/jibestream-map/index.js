// Jibestream Integration
module.exports = angular.module('JibestreamMap', [])

.run(function (Preloader) {

  // Add Jibestream Map resources to kiosk preloader

  var JMapInitTask = Preloader.createTask("Jibestream Bootstrap");
  JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {
    deviceId: 126092,
    languageCode: "en"
  });
  JMap.addListener("StandAloneMapsReady", JMapInitTask.resolve);

  /*STORE CARD CLICK*/
  JMap.addListener("StoreCardClick", function(e, destination){
    console.log("Get more details for " + destination.name);
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

})

.controller('JibestreamMapController', function ($scope, $element) {
  $scope.isLoading = true;
  var mapObject = new JMap.Building($element.find("#map-container"), $element.offsetWidth, $element.offsetHeight, JMap._stylingData);
  mapObject.setDefaultLocation();
  $scope.isLoading = false;
  // // mapObject.setDefaultPopUpRender($("#popup-render-container").html());
  // $("#loading-container").remove();
  TweenLite.set($("#map-container"), {
    alpha: 1
  });
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