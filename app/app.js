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
  require('./core/screen').name,

  // Modules
  require('./modules/kiosk').name,
  require('./modules/preloader').name,
  require('./public/components/westfield-icons').name
];

// Launch App
var app = angular.module('wfWayfinding', dependencies)

  // Set Routes
  .config(require('./core/routes'))

  // Init
  .run(function($state, behaviors, config) {
    
    // Debug
    require('./core/chrome.setup');
    var pkg = require('../package.json');
    console.log('Launched:', Date(), 'Version: ', pkg.version);

    // Set Global Behaviors
    behaviors.disableRightClick();
    behaviors.disableMousewheel();

  });




// require('./modules/map').name,
// require('./modules/search').name,
// require('./modules/dining').name,
// require('./modules/shopping').name,
// require('./modules/directory').name,
// require('./modules/kiosk-screensaver').name,
// require('./modules/jibestream-map').name,
// require('./modules/largescreen').name,

// // Custom Services
// require('./modules/category-service').name,
// require('./modules/centre-service').name,
// require('./modules/weather-service').name,
// require('./modules/kiosk-service').name,
// require('./modules/store-service').name,

// 
// require('./modules/svg-keyboard').name,
// require('./modules/card-stream').name,
// require('./modules/menu').name,












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
