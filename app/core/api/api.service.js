module.exports = function (Preloader, Hardware, Centre, Categories, Stores, WeatherAPI) {
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
  
  self.fetchWeather = function(next) {
    var weatherTask = Preloader.createTask('Get Weather');
    WeatherAPI.preload(function(weather) {
      weatherTask.resolve();
      console.log('weather', weather);
      if (typeof next === 'function') next(weather);
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

  self.fetchStores = function(next) {
    var storesTask = Preloader.createTask('Get Stores');
    Stores.preload().then(function() {
      storesTask.resolve();
      var stores = Stores.get();
      console.log('stores', stores);
      if (typeof next === 'function') next(stores);
    });
  };

  self.fetchJibestreamMap = function(next) {
    var JMapInitTask = Preloader.createTask('Jibestream Bootstrap');
    JMap.initMapsStandAlone('http://jswestfield.cloudapp.net', {
      deviceId: 126092,
      languageCode: 'en'
    });
    JMap.addListener('StandAloneMapsReady', function () {
      JMapInitTask.resolve();
    });
    var JMapConfigTask = Preloader.createTask('Load Jibestream Config');
    $.ajax({
      url: '/components/jibestream-sdk/jibestreamConfig.json',
      type: 'GET',
      dataType: 'json',
      complete: function (response) {
        JMap._stylingData = JSON.parse(response.responseText);
        JMapConfigTask.resolve();
        if (typeof next === 'function') next(response);
      }
    });
  };

  return self;

};