// Load Dependencies
var dependencies = [
  'famous.angular',
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngTouch',

  // Config
  require('./core/config').name,
  require('./core/utils').name,

  // UI
  require('./ui').name
];

// Launch App
var app = angular.module('wfWayfinding', dependencies)

  // Set Routes
  .config(require('./core/routes'))

  // Init
  .run(function(config) {
    
    // Debug
    require('./core/chrome.setup');
    var pkg = require('../package.json');
    console.log('Launched:', Date(), 'Version: ', pkg.version);
  });





// app.run(function ($state, Preloader, $q, KioskService, $rootScope, config) {

//   // $rootScope.globalConfig = config;

  

//   $state.go('preloader');
//   KioskService.saveState(false);
//   // Backdoor to switch to largescreen view
//   $(window).on('keydown', function (e) {
//     if (e.keyCode === 76) {
//       $state.go('largescreen');
//     }
//   });

// });