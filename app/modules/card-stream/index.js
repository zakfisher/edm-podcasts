module.exports = angular.module('CardStream', [])

.service('CardStream', function ($famous, Map, StoreService, $state, config) {
  var self = {};

  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Easing = $famous['famous/transitions/Easing'];

  self.boxTransitionable = new Transitionable([0, 0, 10]);

  self.shown = false;

  self.setStore = function (store) {
    var jibestreamStore = false,
      jibestreamData = false;

    self.directionList = false;
    self.currentStore = store;

    //Set fallback images for store
    if (self.currentStore._links.store_front.href) {
      self.currentStore.storeFrontImage = self.currentStore._links.store_front.href;
    } else {
      self.currentStore.storeFrontImage = config.placeholderContent.storeFront;
    }

    //Get Jibestream data for store
    try {
      jibestreamStore = JMap.getDestinationByClientId(store.id.toString());
      jibestreamData = JMap.storage.maps.building.getMapsWithDirections(store.id.toString());
      console.log('jibestream data', jibestreamData);
    } catch (e) {
      console.warn('Could not get jibestream data for store', store.id, e);
    }

    //Get Directions and maps if data available from jibestream
    if (jibestreamStore && jibestreamData) {
      self.currentStore.textDirections = jibestreamData.textDirections;
      var previousDirection = false;
      var directionList = [];
      jibestreamData.textDirections.forEach(function (direction) {
        console.log('\n', direction);
        var nearPoint = direction.nearPoint || {
          name: 'nope'
        };
        var directionObject = {
          direction: direction.direction,
          mover: direction.mover,
          intensity: direction.intensity,
          near: nearPoint.name,
          distance: Math.floor(direction.distance * 3.28084)
        };
        //If the direction is too similar to the previous, concatenate them
        if (previousDirection.direction === direction.direction) {
          direction.distance += previousDirection.distance;
          directionList[directionList.length - 1] = direction;
        } else {
          directionList.push(directionObject);
        }
        previousDirection = direction;
      });
      console.log('shorter directions', directionList);
      self.currentStore.directionList = directionList;
      //Get Maps
      self.currentStore.maps = jibestreamData.svgs;
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

  self.showCurrentStoreOnMap = function () {
    var jibestreamStore = JMap.getDestinationByClientId(self.currentStore.id.toString());
    JMap.storage.maps.building.resetAllMaps();
    if (!window.isLargescreen) {
      self.hide();
      $state.go('kioskmap');
      setTimeout(function () {
        Map.building.startWayFinding('start', jibestreamStore, false);
        console.log('show jibestream store on map', jibestreamStore);
      }, 1000);
    }
  };

  self.applyScope = function () {
    if (self.scope) {
      self.scope.$apply();
    }
  };

  return self;
})

.directive('injectSvg', function () {
  return {
    restrict: 'E',
    template: '<span></span>',
    replace: true,
    scope: {
      svgElement: '=element'
    },
    controller: function ($scope, $element) {
      console.log('svg element', $scope.svgElement);
      $element.append($scope.svgElement);
    }
  };
})

.directive('cardStream', function (CardStream) {
  return {
    restrict: 'E',
    template: require('./card-stream.html'),
    controller: function ($scope) {
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