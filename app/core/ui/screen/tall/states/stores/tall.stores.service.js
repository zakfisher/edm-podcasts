module.exports = function (Transitions, Tallscreen) {
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

  self.goBack = function() {
    Tallscreen.changeState('tall/categories', {}, 'stores', 'categories');
  };

  return self;
};