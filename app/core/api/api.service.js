module.exports = function (Preloader, Hardware, Centre, Categories) {
  var self = {};

  self.fetchHardware = function(next) {
    var hardwareTask = Preloader.createTask('Get Hardware');
    Hardware.preload().then(function() {
      hardwareTask.resolve();
      var hardware = Hardware.get();
      console.log('hardware', hardware);
      if (typeof next === 'function') next(hardware);
    });
  };
  
  self.fetchCentre = function(next) {
    var centreTask = Preloader.createTask('Get Centre');
    Centre.preload().then(function() {
      centreTask.resolve();
      var centre = Centre.get();
      console.log('centre', centre);
      if (typeof next === 'function') next(centre);
    });
  };

  self.fetchCategories = function(next) {
    var categoriesTask = Preloader.createTask('Get Categories');
    Categories.preload().then(function() {
      categoriesTask.resolve();
      var categories = Categories.get();
      console.log('categories', categories);
      if (typeof next === 'function') next(categories);
    });
  };

  return self;

};