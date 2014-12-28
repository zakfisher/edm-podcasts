module.exports = function ($rootScope) {
  var self = {};
  self.building = false;

  self.setBuilding = function (building) {
    self.building = building;
  };

  self.reset = function () {
    self.building.resetAllMaps();
  };

  self.show = function () {
    $rootScope.mapShow = true;
  };

  self.hide = function () {
    $rootScope.mapShow = false;
  };

  // Kiosk.on('reset', self.reset);

  return self;

};