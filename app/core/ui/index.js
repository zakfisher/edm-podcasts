// Global UI Dependencies
var dependencies = [
  
  // UI Services
  require('./services/behaviors').name,
  require('./services/transitions').name,
  
  // UI Elements
  require('./elements/current-time').name,
  require('./elements/keyboard').name,
  require('./elements/search').name,
  require('./elements/weather').name,

  // States
  require('./screen').name
];

module.exports = angular.module('EDMui', dependencies)

.run(function($state, Behaviors) {

  // Set Global Behaviors
  // Behaviors.disableRightClick();
  // Behaviors.disableMousewheel();

});