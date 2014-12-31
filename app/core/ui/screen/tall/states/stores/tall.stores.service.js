module.exports = function (Transitions) {
  var self = {};

  self.supply = function(scope) {
  	self.scope = scope;
  };

  self.test = function() {
    console.log('TallStores.test() accessed via Tallscreen.getState(\'stores\').test() from TallCategoriesCtrl');
  };

  self.show = function() {
    Transitions.fadeIn(self.scope);
  };

  self.hide = function() {
  	Transitions.fadeOut(self.scope);
  };

  return self;
};