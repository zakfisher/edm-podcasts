module.exports = angular.module('wfWayfinding_home', [])

.controller('Home', function ($scope, $famous) {
  $scope.perspectiveOrigin = [0, 100];

  var MouseSync = $famous['famous/inputs/MouseSync'];
  var Transitionable = $famous['famous/transitions/Transitionable'];
  var mouseSync = new MouseSync();


  console.log($scope);

  var color = function () {
    var c = "rgba(" +
      Math.floor(Math.random() * 255) +
      ', ' +
      Math.floor(Math.random() * 255) +
      ', ' +
      Math.floor(Math.random() * 255) +
      ", 1)";
    return c;
  }

  color();

  var zz = function () {
    // return (Math.random() * 100) - 100;
    return 0;
  };



  $scope.toggleScaleOfGridItem = function (i) {
    var gitem = $scope.grids[i];
    var scale;
    if (!gitem.scaled) {
      scale = [0, 0, 0];
      gitem.scaled = true;
    } else {
      scale = [1, 1, 1]
      gitem.scaled = false;
    }
    gitem.scale.set(scale, {
      duration: 500,
      curve: 'easeOut'
    });
  };

  var makeGridItem = function () {
    return {
      bgColor: color(),
      z: zz(),
      scale: new Transitionable([0, 0, 0]),
      scaled: true,
      label: ""
    };
  };


  $scope.grids = [
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem(),
    makeGridItem()
  ];

  $scope.myGridLayoutOptions = {
    dimensions: [3, Math.ceil($scope.grids.length / 3)], // specifies number of columns and rows
  };

})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./index.html'),
    controller: 'Home'
  });
});