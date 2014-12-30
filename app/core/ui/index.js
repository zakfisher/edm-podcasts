// Global UI Dependencies
var dependencies = [
  
  // UI Services
  require('./services/behaviors').name,
  require('./services/kiosk').name,
  require('./services/transitions').name,
  
  // UI Elements
  require('./elements/icon').name,
  require('./elements/current-time').name,
  require('./elements/jmap').name,
  require('./elements/weather').name,

  // Screen & States
  require('./screen').name,
  require('./screen/states/preloader').name,
  require('./screen/states/tall/categories').name,
  require('./screen/states/tall/search').name,
  require('./screen/states/tall/stores').name,
  require('./screen/states/wide/map').name,
  require('./screen/states/wide/search').name,
  require('./screen/states/wide/shopping').name,
  require('./screen/states/wide/dining').name,
  require('./screen/states/wide/services').name,
  require('./screen/states/wide/events').name,
];

module.exports = angular.module('wfUI', dependencies)

.run(function($state, config, Behaviors, Preloader) {

  // Go To Initial State
  $state.go('preloader');

  // Set Global Behaviors
  Behaviors.disableRightClick();
  Behaviors.disableMousewheel();

});


// //   // $rootScope.mapReady = true;
// //   // KioskMenu.show();


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