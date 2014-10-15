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
    require('./modules/directory-view').name,
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
},{"../package.json":10,"./modules/directory-view":3,"./modules/home":5,"./modules/jibestream-map":6,"./modules/menu":8}],2:[function(require,module,exports){
module.exports = "<fa-grid-layout fa-options=\"directoryLayoutOptions\">\n  <fa-modifier ng-repeat=\"item in directoryItems\">\n    <fa-surface fa-background-color=\"grid.bgColor\" fa-touchstart=\"launch(item)\" ng-mousedown=\"launch(item)\">\n      {{item.label}}\n    </fa-surface>\n  </fa-modifier>\n</fa-grid-layout>\n";

},{}],3:[function(require,module,exports){
module.exports = angular.module('DirectoryView', [])

.directive('directory', function () {
  return {
    restrict: 'E',
    template: require('./directory.html'),
    controller: function ($scope) {
      $scope.directoryLayoutOptions = {};
    }
  };
});
},{"./directory.html":2}],4:[function(require,module,exports){
module.exports = "<fa-modifier fa-size=\"[1280, 720]\" fa-origin=\"[0.5, 0.5]\">\n  <fa-surface fa-background-color=\"'#444'\" fa-color=\"'#fff'\">\n    <jmap></jmap>\n  </fa-surface>\n</fa-modifier>";

},{}],5:[function(require,module,exports){
// Wayfinding Home View

module.exports = angular.module('wayfindingMap', [])

.controller('KioskHome', function ($scope, $famous) {
  $scope.message = "Wayfinding Prototype Home";
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('map', {
    url: '/',
    template: require('./home.html'),
    controller: 'KioskHome'
  });
});
},{"./home.html":4}],6:[function(require,module,exports){
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
},{"./jmap.html":7}],7:[function(require,module,exports){
module.exports = "<p>Jibestream Map</p>\n<p>\n  <button>+</button>\n</p>";

},{}],8:[function(require,module,exports){
module.exports = angular.module('KioskMenu', [])

.service('KioskMenu', function () {
  var menu = {};
  menu.active = true;

  menu.toggle = function () {
    console.log('toggle menu');
    menu.active = !menu.active;
  };

  return menu;
})

.directive('kioskmenu', function () {
  return {
    restrict: 'E',
    template: require('./menu.html'),
    controller: function ($scope, KioskMenu) {
      $scope.menu = KioskMenu;
      $scope.menuItems = [
        {
          label: 'Item 1'
        },
        {
          label: 'Item 2'
        },
        {
          label: 'Item 3'
        },
        {
          label: 'Item 4'
        }
      ];
      $scope.menuLayoutOptions = {
        dimensions: [1, $scope.menuItems.length],
      };

    }
  };
});
},{"./menu.html":9}],9:[function(require,module,exports){
module.exports = "<!-- Menu Toggle Button -->\n<fa-surface>\n  <button ng-click=\"menu.toggle()\">Menu</button>\n</fa-surface>\n<!-- Menu -->\n<fa-modifier fa-size=\"[100, 100]\" fa-translate=\"[0, 40]\">\n  <fa-grid-layout fa-options=\"menuLayoutOptions\" ng-show=\"menu.active\">\n      <fa-modifier ng-repeat=\"item in menuItems\" fa-translate=\"[0, 0, grid.z]\" fa-rotate=\"grid.scale.get()\">\n        <fa-surface fa-background-color=\"grid.bgColor\" fa-touchstart=\"launch(item)\" ng-mousedown=\"launch(item)\" class=\"dbl-sided\">\n          {{item.label}}\n        </fa-surface>\n      </fa-modifier>\n    </fa-grid-layout>\n</fa-modifier>";

},{}],10:[function(require,module,exports){
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
    "gulp-notify": "latest",
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