module.exports = angular.module("CardStream", [])

.service("CardStream", function ($famous, Map) {
  var self = {};

  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Easing = $famous['famous/transitions/Easing'];

  self.boxTransitionable = new Transitionable([0, 0, 10]);

  self.shown = false;

  self.setStore = function (store) {
    self.currentStore = store;
    var jibestreamStore = JMap.getDestinationByClientId(store.id.toString());
    self.currentStore.maps = JMap.storage.maps.building.getMapsWithDirections(store.id.toString());
    console.log(self.currentStore.maps);
  };

  self.show = function () {
    self.shown = true;
    self.boxTransitionable.set([0, 0, 50], {
      duration: 500,
      curve: Easing.inOutBack
    }, function () {
      self.shownDone = true;
    });
  };

  self.hide = function () {
    if (!self.shownDone) {
      return false;
    }
    self.boxTransitionable.set([0, 0, 0], {
      duration: 500,
      curve: Easing.inOutBack
    }, function () {
      self.shown = false;
      self.applyScope();
    });
  };

  self.applyScope = function () {
    if (self.scope) {
      self.scope.$apply();
    }
  };

  return self;
})

.directive("injectSvg", function () {
  return {
    restrict: "E",
    template: "<span></span>",
    replace: true,
    scope: {
      svgElement: "=element"
    },
    controller: function ($scope, $element) {
      console.log("svg element", $scope.svgElement);
      $element.append($scope.svgElement);
    }
  };
})

.directive("cardStream", function (CardStream) {
  return {
    restrict: "E",
    template: require('./card-stream.html'),
    controller: function ($scope, $element) {
      $scope.cardStream = CardStream;
      $scope.cardStream.scope = $scope;
      var mapsContainer = $element.find('.maps');

      $scope.$watch('cardStream.currentStore.maps', function (a, b) {
        console.log('new maps', mapsContainer, a);
        if (a !== b) {
          // mapsContainer.empty();
          a.forEach(function (map) {
            for (var i = 0; i < map.length; i++) {
              mapsContainer.append(map[i]);
            };
            
          });
          console.log(mapsContainer[0]);
        }
      });

    }
  };
});