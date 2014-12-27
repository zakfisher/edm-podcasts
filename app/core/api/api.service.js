module.exports = function (config, Preloader, Hardware, Centre) {
  var self = {};

  self.getHardware = function(next) {
    var hardwareTask = Preloader.createTask('Get Hardware');
    Hardware.preload().then(function() {
      hardwareTask.resolve();
      var hardware = Hardware.getHardware();
      console.log('hardware', hardware);
      if (typeof next === 'function') next(hardware);
    });
  };
  
  self.getCentre = function(next) {
    var centreTask = Preloader.createTask('Get Centre');
    Centre.preload(config.hardware.centre.id).then(function() {
      centreTask.resolve();
      var centre = Centre.getCentre();
      console.log('centre', centre);
      if (typeof next === 'function') next(centre);
    });
  };

  return self;

};