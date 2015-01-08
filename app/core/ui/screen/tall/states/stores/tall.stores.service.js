module.exports = function (Transitions) {
  var self = {};

  self.supply = function(scope) {
  	self.scope = scope;
  };

  self.show = function() {
    Transitions.fadeIn(self.scope);
  };

  self.hide = function() {
  	Transitions.fadeOut(self.scope);
  };

  self.selectStore = function(store) {
    console.log('selected store', store);
  };

  self.selectFloor = function(floor) {
    self.scope.activeFloor = floor.level;
  };

  return self;
};