// Global API Dependencies
var dependencies = [
  require('./centre').name,
  require('./hardware').name,
];

module.exports = angular.module('wfAPI', dependencies)

.service('API', require('./api.service'))

// Fetch data and store in config
.run(function (API, config) {

  // Get Hardware
  API.getHardware(function(hardware) {
    config.hardware = hardware;

    // Get centre using centre id from hardware
    API.getCentre(function(centre) {
      config.centre = centre;

      // Get stores, etc. from centre
      // API.get
    });
  });

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