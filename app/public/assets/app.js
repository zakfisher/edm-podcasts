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
module.exports = "<fa-modifier fa-size=\"[1280, 720]\" fa-origin=\"[0.5, 0.5]\">\n  <fa-surface fa-background-color=\"'#444'\" fa-color=\"'#fff'\">\n    <jmap></jmap>\n  </fa-surface>\n</fa-modifier>";

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

.controller('JibestreamMapController', function ($scope, $element) {
  console.log('init jibestream map');

  var mapObject;

  JMap.addListener("StandAloneMapsReady", onJmapReady);
  JMap.addListener(JMap.MODULE_READY, onMapCreated);
  JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {deviceId:21744, languageCode:"en"});

  function onJmapReady(){
    mapObject = new JMap.Building($element.find("#map-container"), 1280,720
    	/*Add styling params here*/);
  }

  function onMapCreated(){
    //console.log("Ready to do stuff!");
    $("#loading-container").remove();
    TweenLite.set($("#map-container"), {alpha:1});
    mapObject.setDefaultLocation();
  }


  /*Exposed Calls*/

  function resetMap(){
    mapObject.resetAllMaps();
  }

  function wayFindToDestinationByID(wfID){
    mapObject.startWayfinding(JMap.getDesinationById(wfID));
  }






})

.directive('jmap', function () {
  // var jmapController = new JibestreamMapController({}, $("#container"));
  return {
    restrict: 'E',
    controller: 'JibestreamMapController',
    template: require('./jmap.html')
  };
});
},{"./jmap.html":5}],5:[function(require,module,exports){
module.exports = "<style>\n\n/* Eventually use famous */\n\n/* Minified CSS - Less lines and can be replaced quickly. This is only for the loader animation. */\n#floatingCirclesG{position:relative;width:150px;height:150px;-webkit-transform:scale(0.6);transform:scale(0.6);display:block;margin:285px auto 0;}.f_circleG{position:absolute;background-color:#FFF;height:27px;width:27px;-webkit-border-radius:14px;-webkit-animation-name:f_fadeG;-webkit-animation-duration:.8s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:linear;border-radius:14px;animation-name:f_fadeG;animation-duration:.8s;animation-iteration-count:infinite;animation-direction:linear}#frotateG_01{left:0;top:61px;-webkit-animation-delay:.3s;animation-delay:.3s}#frotateG_02{left:18px;top:18px;-webkit-animation-delay:.4s;animation-delay:.4s}#frotateG_03{left:61px;top:0;-webkit-animation-delay:.5s;animation-delay:.5s}#frotateG_04{right:18px;top:18px;-webkit-animation-delay:.6s;animation-delay:.6s}#frotateG_05{right:0;top:61px;-webkit-animation-delay:.7s;animation-delay:.7s}#frotateG_06{right:18px;bottom:18px;-webkit-animation-delay:.8s;animation-delay:.8s}#frotateG_07{left:61px;bottom:0;-webkit-animation-delay:.9s;animation-delay:.9s}#frotateG_08{left:18px;bottom:18px;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes f_fadeG{0%{background-color:#000}100%{background-color:#FFF}}@keyframes f_fadeG{0%{background-color:#000}100%{background-color:#FFF}}\n\n#loading-container{\n\twidth: 100%;\n\theight:100%;\n\tbackground-color: #444;\n\tz-index:2;\n}\n\n#map-container{\n    width: 100%;\n    height:100%;\n    opacity: 0;\n}\n</style>\n\n<div id=\"loading-container\">\n\t<div id=\"floatingCirclesG\">\n\t\t<div class=\"f_circleG\" id=\"frotateG_01\"></div><div class=\"f_circleG\" id=\"frotateG_02\"></div><div class=\"f_circleG\" id=\"frotateG_03\"></div><div class=\"f_circleG\" id=\"frotateG_04\"></div><div class=\"f_circleG\" id=\"frotateG_05\"></div><div class=\"f_circleG\" id=\"frotateG_06\"></div><div class=\"f_circleG\" id=\"frotateG_07\"></div><div class=\"f_circleG\" id=\"frotateG_08\"></div>\n\t</div>\n</div>\n\n\n<div id=\"map-container\"></div>";

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