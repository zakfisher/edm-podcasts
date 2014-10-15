// Jibestream Integration
module.exports = angular.module('JibestreamMap', [])

.controller('JibestreamMapController', function ($scope, $element) {
  console.log('init jibestream map');

  var mapObject;

  JMap.addListener("StandAloneMapsReady", onJmapReady);
  JMap.addListener(JMap.MODULE_READY, onMapCreated);
  JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {deviceId:21744, languageCode:"en"});

  function onJmapReady(){
    mapObject = new JMap.Building($element.find("#map-container"), 1280,720
    	/*Add styling params here*/);
  }

  function onMapCreated(){
    //console.log("Ready to do stuff!");
    $("#loading-container").remove();
    TweenLite.set($("#map-container"), {alpha:1});
    mapObject.setDefaultLocation();
  }


  /*Exposed Calls*/

  function resetMap(){
    mapObject.resetAllMaps();
  }

  function wayFindToDestinationByID(wfID){
    mapObject.startWayfinding(JMap.getDesinationById(wfID));
  }






})

.directive('jmap', function () {
  // var jmapController = new JibestreamMapController({}, $("#container"));
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});