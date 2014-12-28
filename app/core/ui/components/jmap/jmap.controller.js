module.exports = function ($scope, $element, Hardware, Preloader, JibestreamMap) {
  
  Preloader.whenFinished().then(function() {
    var hardware = Hardware.get();
    $scope.class = {
      tall: hardware.screen.size === 'tall', 
      wide: hardware.screen.size === 'wide'
    };

   //  var mapObject = new JMap.Building($element.find('.map-container'), $element.offsetWidth, $element.offsetHeight, JMap._stylingData);
	  // mapObject.setDefaultLocation();
	  // Map.setBuilding(mapObject);
  });

};