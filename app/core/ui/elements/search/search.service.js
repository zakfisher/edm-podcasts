module.exports = function($famous, Utils, Screen, Keyboard, Stores) {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  self.bindToKeyboard = function(scope) {
    var Timer = $famous['famous/utilities/Timer'];
  	Timer.every(function () {
      scope.search.query.input = Keyboard.getString();
      // Since we're updating the search query every 1ms,
      // let's only execute a search if the query has changed.
      if (scope.search.query.input != self.oldString) {
      	self.oldString = scope.search.query.input;
	    	scope.search.execute();
	    	if (Screen.bindUrlToSearchQuery) {
	      	Screen.changeUrl(scope.search.url, {query:scope.search.query.input});
	      }
      }
    }, 1);
  };

  self.getStoresByQuery = function(query, options) {
    console.log('SEARCHING FOR', query);
    var defaultOptions = {
      searchByStoreName: true,
      searchByCategoryCodes: true
    };
    angular.extend(defaultOptions, options);
    var totalResults = 0, resultsByStoreName = 0, resultsByCategoryCode = 0;
    var stores = Stores.get();
    var results = [];
    query = query.toLowerCase();
    for (var i = 0; i < stores.length; i++) {
      var store = stores[i];
      if (defaultOptions.searchByStoreName) {
        if (store.name.toLowerCase().indexOf(query) > -1) {
          store.foundByStoreName = true;
          results.push(store);
          totalResults++;
          resultsByStoreName++;
          continue;
        }
      }
      if (defaultOptions.searchByCategoryCodes) {
        for (var j = 0; j < store.category_codes.length; j++) {
          var categoryCode = store.category_codes[j];
          if (categoryCode.toLowerCase().indexOf(query) > -1) {
            store.foundByCategoryCode = true;
            results.push(store);
            totalResults++;
            resultsByCategoryCode++;
            continue;
          } 
        }
      }
    }
    console.log('Total Results', totalResults);
    console.log('Results by Store Name', resultsByStoreName);
    console.log('Results by Category Code', resultsByCategoryCode);
    return Utils.unique(results, 'name');
  };

  return self;
};