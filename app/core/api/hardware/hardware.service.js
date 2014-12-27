module.exports = function ($http) {
  var self = {};

  self.preload = function () {
    var req = $http({
      method: 'GET',
      cache: true,
      url: '/'
      // url: 'hardware.program.exe'
    });
    req.success(function (r) {
      var height = window.innerHeight;
      var width = window.innerWidth;
      r = {
        macAddress: '1234567890',
        centre: {
          title: 'Valley Fair',
          id: 'valleyfair',
          lat: 37.325087,
          lon: -121.946273
        },
        screen: {
          height: height,
          width: width,
          size: height > width ? 'tall' : 'wide'
        }
      };
      self.set(r);
    });
    return req;
  };

  self.set = function (hardware) {
    self.hardware = hardware;
  };

  self.get = function () {
    return self.hardware;
  };

  return self;
};