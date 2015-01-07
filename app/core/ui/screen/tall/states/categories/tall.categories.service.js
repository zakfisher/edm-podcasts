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

  self.selectCategory = function(categoryCode) {
    Tallscreen.changeState('tall/categories', {categoryId: categoryCode}, 'categories', 'stores');
  };

  self.selectSearch = function() {
    Tallscreen.changeState('tall/search', {query: self.scope.search.query.input}, 'categories', 'search');
  };

  return self;
};