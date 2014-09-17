(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module('wfWayfinding', [
    // Plugins
    'famous.angular',
    'ngAnimate',
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngTouch',

    // App Modules
    require('./modules/home').name

  ]);

//Routing fallback to home
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $urlRouterProvider.otherwise('/');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);
},{"./modules/home":3}],2:[function(require,module,exports){
module.exports = "<fa-app fa-perspective=\"300\" fa-perspective-origin=\"perspectiveOrigin\">\n  <fa-surface>\n    <input type=\"range\" ng-model=\"rangeInput1\">\n  </fa-surface>\n  <fa-modifier fa-size=\"[500, 500]\" fa-rotate-y=\"rotateY(yRotation)\" fa-origin=\"[0.5, 0.5]\">\n    <fa-grid-layout fa-options=\"myGridLayoutOptions\">\n      <fa-modifier ng-repeat=\"grid in grids\" fa-translate=\"[0, 0, grid.z]\" fa-rotate=\"grid.scale.get()\">\n        <fa-surface fa-background-color=\"grid.bgColor\" ng-mouseover=\"toggleGridItem($index, $event)\" fa-touchstart=\"toggleScaleOfGridItem($index)\"  class=\"dbl-sided\">{{grid.label}}</fa-surface>\n      </fa-modifier>\n    </fa-grid-layout>\n  </fa-modifier>\n</fa-app>";

},{}],3:[function(require,module,exports){
module.exports = angular.module('wfWayfinding_home', [])

.controller('Home', function ($scope, $famous) {
  $scope.perspectiveOrigin = ['50%', '50%'];

  var MouseSync = $famous['famous/inputs/MouseSync'];
  var Transitionable = $famous['famous/transitions/Transitionable'];
  var mouseSync = new MouseSync();


  $scope.toggleGridItem = function (i, e) {
    e.preventDefault();
    e.stopPropagation();
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
  for (var i = 100 - 1; i >= 0; i--) {
    $scope.grids.push(makeGridItem());
  };

  $scope.myGridLayoutOptions = {
    dimensions: [10, 10], // specifies number of columns and rows
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
},{"./index.html":2}]},{},[1])