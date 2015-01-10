module.exports = function (Tallscreen, Transitions, Utils, Search) {
  var self = {};

  self.supply = function(scope) {
  	self.scope = scope;
    Search.bindToKeyboard(scope);
    Tallscreen.bindUrlToSearchQuery = true;
  };

  self.show = function() {
    Transitions.fadeIn(self.scope);
  };

  self.hide = function() {
  	Transitions.fadeOut(self.scope);
  };

  self.findStores = function() {
    if (self.scope.search.query.input == '') {
      self.scope.stores.columns = [];
      return;
    }
    var options = {
      searchByStoreName: true,
      searchByCategoryCodes: true
    };
    var stores = Search.getStoresByQuery(self.scope.search.query.input, options);
    // If less than 3 stores, grid won't display any
    while (stores.length < 3) stores.push({});
    self.scope.stores.columns = Utils.arrayToColumns(stores, 3);
  };

  self.selectStore = function(store) {
    console.log('selected store', store);
  };

  return self;
};