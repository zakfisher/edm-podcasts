module.exports = function (Tallscreen, Transitions) {
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

  self.selectCategory = function(code) {
    Tallscreen.go('tall/categories', {categoryId: code});

    // Display Stores By Category
    // - get stores
    // - show stores view
    Tallscreen.getState('stores').show();
  };

  return self;
};