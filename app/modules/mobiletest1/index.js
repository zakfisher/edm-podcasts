module.exports = angular.module('wfWayfinding_mobiletest1', [])

.controller('MobileTest1', function ($scope, $famous) {
  $scope.perspectiveOrigin = ['50%', '50%'];

  var Transitionable = $famous['famous/transitions/Transitionable'];

  $scope.toggleGridItem = function (i, e) {
    e.preventDefault();
    e.stopPropagation();
    var gitem = $scope.grids[i];
    var scale;
    if (!gitem.scaled) {
      scale = [0, 0, 0];
      gitem.scaled = true;
    } else {
      scale = [1, 1, 1];
      // scale = [0, 0, 0]
      gitem.scaled = false;
    }
    gitem.scale.set(scale, {
      duration: 200,
      curve: 'easeOut'
    });
  };

  var generateColor = function () {
    var c = "rgba(" +
      255 +
      ', ' +
      Math.floor(Math.random() * 255) +
      ', ' +
      Math.floor(Math.random() * 255) +
      ", 1)";
    return c;
  };

  var makeGridItem = function () {
    return {
      bgColor: generateColor(),
      z: 0,
      scale: new Transitionable([0, 0, 0]),
      scaled: true,
      label: ""
    };
  };

  $scope.grids = [];
  for (var i = 25 - 1; i >= 0; i--) {
    $scope.grids.push(makeGridItem());
  }

  $scope.myGridLayoutOptions = {
    dimensions: [5, 5], // specifies number of columns and rows
  };

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('mobiletest1', {
    url: '/mobiletest1',
    template: require('./index.html'),
    controller: 'MobileTest1'
  });
});