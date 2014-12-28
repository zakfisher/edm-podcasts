// Global UI Dependencies
var dependencies = [
  
  // Services
  require('./services/behaviors').name,
  require('./services/kiosk').name,
  require('./services/transitions').name,
  
  // Screen & States
  require('./screen').name,
  require('./states/preloader').name,
  require('./states/tall/categories').name,
  require('./states/tall/search').name,
  require('./states/wide/map').name,
  require('./states/wide/search').name,
  require('./states/wide/shopping').name,
  require('./states/wide/dining').name,
  require('./states/wide/services').name,
  require('./states/wide/events').name,

  // Components
  require('./components/icon').name
];

module.exports = angular.module('wfUI', dependencies)

.run(function($timeout, $state, config, Behaviors, Hardware, Preloader) {

  // Go To Initial State
  $state.go('preloader');
  Preloader.whenFinished().then(function () {
    $timeout(function() {
      $state.go(Hardware.get().screen.size);
    }, config.UI.preloaderTimeout);
  });

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