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
    require('./modules/home').name,
    require('./modules/test').name

  ]);

//Routing fallback to home
app.config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);
},{"./modules/home":3,"./modules/test":4}],2:[function(require,module,exports){
module.exports = "";

},{}],3:[function(require,module,exports){
module.exports = angular.module('wfWayfinding_home', [])

//Controllers
.controller('Home', function ($scope) {
  console.log("Home Controller");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    template: require('./home.html'),
    controller: 'Home'
  });
});
},{"./home.html":2}],4:[function(require,module,exports){
module.exports = angular.module('wfWayfinding_test', [])

//Controllers
.controller('Test', function ($scope) {
  console.log("Test Page");
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('test', {
    url: '/test',
    template: require('./test.html'),
    controller: 'Test'
  });
});
},{"./test.html":5}],5:[function(require,module,exports){
module.exports=require(2)
},{}]},{},[1])