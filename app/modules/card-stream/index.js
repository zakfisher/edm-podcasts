module.exports = angular.module("CardStream", [])

.service("CardStream", function ($famous, Map, StoreService, $state, config) {
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
      data = JMap.storage.maps.building.getMapsWithDirections(store.id.toString());
      console.log('jibestream data', data);
    } catch (e) {
      console.warn('Could not get jibestream data for store', store.id, e);
    }

    //Get Directions and maps if data available from jibestream
    if (jibestreamStore && data) {
      self.currentStore.textDirections = data.textDirections;
      var previousDirection = false;
      var concatenatedDirection = false;
      var directionList = [];
      data.textDirections.forEach(function (direction) {
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
        if (previousDirection.direction == direction.direction) {
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
      self.currentStore.maps = data.svgs;
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
        Map.building.startWayFinding("start", jibestreamStore, false);
        console.log('show jibestream store on map', jibestreamStore);
      }, 1000);
    }
  };

  self.getDirections = function (textArray, dest) {
    var str = "";
    var distanceTotal = 0;
    var CONTEXTROOT = "/JMap";
    var dict = {};
    dict.turn = "Turn ";
    dict.proceed = "Proceed ";
    dict.mover = "Take the ";
    dict.leftimg = '<img class="directionImg" src="' + CONTEXTROOT + '/img/directions/MAF_LeftArrow.png"/>';
    dict.rightimg = '<img class="directionImg" src="' + CONTEXTROOT + '/img/directions/MAF_RightArrow.png"/>';
    dict.straightimg = '<img class="directionImg" src="' + CONTEXTROOT + '/img/directions/MAF_straightarrow.png"/>';
    dict.Elevator = '<img class="directionImg" src="' + CONTEXTROOT + '/img/directions/MAF_Elevator.png"/>';
    dict.Escalator = '<img class="directionImg" src="' + CONTEXTROOT + '/img/directions/MAF_Escalator.png"/>';
    dict.left = '<strong>left</strong>';
    dict.right = '<strong>right</strong>';
    dict.forward = "straight ";
    dict.backward = "around ";
    dict.end = "Arrive at ";

    for (var i = 0, len = textArray.length; i < len; i++) {
      var instruction;
      switch (textArray[i].direction) {
      case "left":
        distanceTotal += textArray[i].distance;
        instruction = dict.leftimg + "<span>" + (i === 0 ? dict.head : dict.turn) + dict.left + (textArray[i].nearPoint === undefined ? "" : (dict.near + "<strong>" + textArray[i].nearPoint.name + "</strong>"));
        str += "<li>" + instruction + "</span></li>";
        break;
      case "right":
        distanceTotal += textArray[i].distance;
        instruction = dict.leftimg + "<span>" + (i === 0 ? dict.head : dict.turn) + dict.right + (textArray[i].nearPoint === undefined ? "" : (dict.near + "<strong>" + textArray[i].nearPoint.name + "</strong>"));
        str += "<li>" + instruction + "</span></li>";
        break;
      case "straight":
        if (textArray[i + 1].direction === "straight") {
          distanceTotal += textArray[i].distance;
        } else {
          distanceTotal += textArray[i].distance;
          instruction = dict.straightimg + "<span>" + dict.proceed + dict.forward + "for " + distanceTotal.toString() + " meters";
          str += "<li>" + instruction + "</span></li>";
          distanceTotal = 0;
        }
        break;
      case "backward":
        distanceTotal += textArray[i].distance;
        instruction = "<span>" + dict.turn + dict.backward;
        str += "<li>" + instruction + "</span></li>";
        break;
      case "floorup":
        instruction = (dict[textArray[i].mover] ? dict[textArray[i].mover] : "") + "<span>" + dict.mover + textArray[i].mover + "  up to " + settings.maps.model.getMapDataById(textArray[i].mapid).name + "";
        str += "<li>" + instruction + "</span></li>";
        str += '<hr class="floorBreak"/>';
        break;
      case "floordown":
        instruction = (dict[textArray[i].mover] ? dict[textArray[i].mover] : "") + "<span>" + dict.mover + textArray[i].mover + "  up to " + settings.maps.model.getMapDataById(textArray[i].mapid).name;
        str += "<li>" + instruction + "</span></li>";
        str += '<hr class="floorBreak"/>';
        break;
      case "end":
        instruction = "<span>" + dict[''] + dest;
        str += "<li>" + instruction + "</span></li>";
        break;
      }
    }
    return str;
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