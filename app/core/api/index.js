// Global API Dependencies
var dependencies = [
  require('./categories').name,
  require('./centre').name,
  require('./hardware').name,
  require('./stores').name,
  require('./weather').name,
];

module.exports = angular.module('wfAPI', dependencies)
.service('API', require('./api.service'))

.run(function(API) {

  // Get Hardware
  API.fetchHardware(function(hardware) {

    // Get categories (using centre id from hardware)
    API.fetchCategories();

    // Get stores (using centre id from hardware)
    API.fetchStores();

    // Get centre (using centre id from hardware)
    API.fetchCentre(function(centre) {

      // Screen-specific data calls
      switch (hardware.screen.size) {
        case 'tall': 
          // Get weather (using latitude, longitude from centre)
          API.fetchWeather();
        break;
        case 'wide': break;
      }

    });

  });

});