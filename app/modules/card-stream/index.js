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
    self.boxTransitionable.set([0, 0, 100], {
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
    self.boxTransitionable.set([0, 0, 20], {
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

.directive("cardStream", function (CardStream) {
  return {
    restrict: "E",
    template: require('./card-stream.html'),
    controller: function ($scope) {
      $scope.cardStream = CardStream;
      $scope.cardStream.scope = $scope;
    }
  };
});