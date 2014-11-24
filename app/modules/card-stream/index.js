module.exports = angular.module("CardStream", [])

.service("CardStream", function ($famous, Map, StoreService) {
  var self = {};

  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Easing = $famous['famous/transitions/Easing'];

  self.boxTransitionable = new Transitionable([0, 0, 10]);

  self.shown = false;

  self.setStore = function (store) {
    self.currentStore = store;
    try {
      var jibestreamStore = JMap.getDestinationByClientId(store.id.toString());
      var data = JMap.storage.maps.building.getMapsWithDirections(store.id.toString());
      console.log('jibestream data', data);
      self.currentStore.textDirections = data.textDirections;
      self.currentStore.maps = data.svgs;
    } catch (e) {
      console.warn('Could not get jibestream data for store', store.id);
    }
    self.relatedStores = StoreService.getRelatedStoresOf(store);
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
      self.shownDone = false;
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
    controller: function ($scope, $element, StoreService) {
      $scope.cardStream = CardStream;
      $scope.cardStream.scope = $scope;

      $scope.isLarge = true;

      if ($scope.isLarge) {
        $scope.layoutSize = 1500;
      } else {
        $scope.layoutSize = 1000;
      }

    }
  };
});