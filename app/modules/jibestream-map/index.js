// Jibestream Integration
module.exports = angular.module('JibestreamMap', [])

.controller('JibestreamMapController', function ($scope, $element) {
  console.log('init jibestream map -- ');


  var mapObject;
  // console.log(JMap);


  JMap.addListener("StandAloneMapsReady", onJmapReady);
  // console.log("Can use jquery");
  JMap.addListener(JMap.MODULE_READY, onMapCreated);
  // console.log("Second listener------");
  JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {
    deviceId: 126092,
    languageCode: "en"
  });

  function onJmapReady() {
    // alert("Build maps");
    // mapObject = new JMap.Building($element.find("#map-container"), 1280,720);
    // console.log("Got here");

    $.ajax({
      url: "/components/jibestream-sdk/jibestreamConfig.json",
      type: "GET",
      dataType: "json",
      complete: function (response) {
        console.log("Success", response);
        var stylingData = JSON.parse(response.responseText);
        mapObject = new JMap.Building($element.find("#map-container"), $element.offsetWidth, $element.offsetHeight, stylingData);
      }
    });
  }


  function onMapCreated() {
    //console.log("Ready to do stuff!");
    $("#loading-container").remove();
    TweenLite.set($("#map-container"), {
      alpha: 1
    });
    mapObject.setDefaultLocation();
  }


  /*Exposed Calls*/
  function resetMap() {
    mapObject.resetAllMaps();
  }

  // function wayFindToDestinationByID(wfID){
  //   mapObject.startWayfinding("Kiosk", JMap.getDesinationById(wfID));
  // }





})

.directive('jmap', function () {
  // var jmapController = new JibestreamMapController({}, $("#container"));
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});