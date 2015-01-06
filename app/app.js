// Load Dependencies
var dependencies = [
  'famous.angular',
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  require('./core/config').name,
  require('./core/utils').name,
  require('./core/api').name,
  require('./core/ui').name
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


// $http.get('http://127.0.0.1:8082/kiosk').success(function (r) {
//   console.log('\n\nKIOSK HARDWARE', r);
// });



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
