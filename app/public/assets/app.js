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
    require('./modules/jibestream-map').name,
    require('./modules/menu').name
  ]);

//Routing fallback to home
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);

// Go Fullscreen
try {
  // chrome.app.window.current().fullscreen();
} catch (e) {
  console.warn('Chrome fullscreen command not available.')
}
},{"../package.json":8,"./modules/home":3,"./modules/jibestream-map":4,"./modules/menu":6}],2:[function(require,module,exports){
module.exports = "<jmap></jmap>";

},{}],3:[function(require,module,exports){
// Wayfinding Home View

module.exports = angular.module('wayfindingMap', [])

.controller('KioskHome', function ($scope, $famous) {
  $scope.message = "Wayfinding Prototype Home";
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('map', {
    url: '/',
    template: require('./index.html'),
    controller: 'KioskHome'
  });
});
},{"./index.html":2}],4:[function(require,module,exports){
// Jibestream Integration

module.exports = angular.module('JibestreamMap', [])

.controller('JibestreamMapController', function ($scope) {
  console.log('init jibestream map');
})

.directive('jmap', function () {
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});
},{"./jmap.html":5}],5:[function(require,module,exports){
module.exports = "<fa-modifier fa-size=\"[1280, 720]\" fa-origin=\"[0.5, 0.5]\">\n  <fa-surface fa-background-color=\"'#444'\" fa-color=\"'#fff'\">\n    <p>Jibestream Map</p>\n    <p>\n      <button>+</button>\n    </p>\n  </fa-surface>\n</fa-modifier>";

},{}],6:[function(require,module,exports){
module.exports = angular.module('KioskMenu', [])

.controller('KioskMenuController', function ($scope) {
  console.log('menu controller');

  $scope.menuActive = true;

  $scope.toggleMenu = function () {
    $scope.menuActive = !$scope.menuActive;
    console.log('set menuActive', $scope.menuActive);
  };

})

.directive('kioskmenu', function () {
  return {
    restrict: 'E',
    controller: 'KioskMenuController',
    template: require('./menu.html')
  };
});
},{"./menu.html":7}],7:[function(require,module,exports){
module.exports = "<fa-surface>\n  <button ng-click=\"toggleMenu()\">Menu</button>\n</fa-surface>";

},{}],8:[function(require,module,exports){
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
    "brfs": "latest",
    "gulp-browserify": "latest",
    "gulp-json-editor": "latest",
    "gulp-sass": "latest",
    "gulp-zip": "latest",
    "gulp-concat": "latest",
    "gulp-ngmin": "latest",
    "gulp-plumber": "latest",
    "gulp-clean": "latest",
    "gulp-jshint": "latest",
    "stringify": "latest",
    "gulp-livereload": "latest",
    "jshint-stylish": "latest",
    "gulp-watch": "latest"
  },
  "engines": {
    "node": "0.10.x"
  },
  "author": "Dan Sim"
}
},{}]},{},[1])