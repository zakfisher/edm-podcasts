(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var pkg = require('../package.json');

var app = angular.module('wfWayfinding', [
    // Plugins
    'famous.angular',
    'ngAnimate',
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngTouch',

    // App Modules
    require('./modules/home').name,
    require('./modules/mobiletest1').name,
    require('./modules/menu').name
  ]);

//Routing fallback to home
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/mobiletest1');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);

// Go Fullscreen
chrome.app.window.current().fullscreen();
},{"../package.json":7,"./modules/home":3,"./modules/menu":4,"./modules/mobiletest1":6}],2:[function(require,module,exports){
module.exports = "<div>\n  <h1>{{message}}</h1>\n  <p>\n    <a ui-sref=\"mobiletest1\">Mobile 3D Test</a>\n  </p>\n</div>";

},{}],3:[function(require,module,exports){
// Wayfinding Map Module
//
module.exports = angular.module('wayfindingMap', [])

.controller('MapHome', function ($scope, $famous) {
  $scope.message = "Wayfinding Prototype";
  console.log('the map controller');
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('map', {
    url: '/',
    template: require('./index.html'),
    controller: 'MapHome'
  });
});
},{"./index.html":2}],4:[function(require,module,exports){
module.exports = (function () {

  var app = angular.module('wfMenu', []);

  app.controller('MenuController', function ($scope) {
    console.log('menu controller');
  });

  app.config(function ($stateProvider) {
    $stateProvider.state('menutest', {
      url: '/menutest',
      // template: require('./index.html'),
      controller: 'MenuController'
    });
  });

  return app;
}());
},{}],5:[function(require,module,exports){
module.exports = "<fa-app fa-perspective=\"300\" fa-perspective-origin=\"perspectiveOrigin\">\n  <fa-modifier fa-size=\"[500, 500]\" fa-origin=\"[0.5, 0.5]\">\n    <fa-grid-layout fa-options=\"myGridLayoutOptions\">\n      <fa-modifier ng-repeat=\"grid in grids\" fa-translate=\"[0, 0, grid.z]\" fa-rotate=\"grid.scale.get()\">\n        <fa-surface fa-background-color=\"grid.bgColor\" fa-touchstart=\"toggleGridItem($index, $event)\" ng-mousedown=\"toggleGridItem($index, $event)\"  class=\"dbl-sided\">{{grid.label}}</fa-surface>\n      </fa-modifier>\n    </fa-grid-layout>\n  </fa-modifier>\n</fa-app>";

},{}],6:[function(require,module,exports){
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
},{"./index.html":5}],7:[function(require,module,exports){
module.exports={
  "name": "wayfinding_prototype",
  "version": "0.0.7",
  "description": "Westfield Wayfinding Protytype",
  "main": "app/server/index.js",
  "scripts": {
    "start": "node app/server/index.js"
  },
  "dependencies": {
    "express": "~3.4.x",
    "gulp": "latest",
    "browserify": "latest",
    "gulp-browserify": "latest",
    "gulp-json-editor": "latest",
    "gulp-sass": "latest",
    "gulp-zip": "latest",
    "gulp-concat": "latest",
    "gulp-express": "latest",
    "gulp-ngmin": "latest",
    "gulp-plumber": "latest",
    "gulp-clean": "latest",
    "gulp-jshint": "latest",
    "stringify": "latest",
    "gulp-livereload": "latest",
    "jshint-stylish": "latest",
    "brfs": "latest",
    "gulp-watch": "latest"
  },
  "engines": {
    "node": "0.10.x"
  },
  "author": "Dan Sim"
}
},{}]},{},[1])