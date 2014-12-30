module.exports = function(dateFilter) {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  self.update = function() {
	self.scope.time = self.get();
  };

  self.get = function() {
  	var format = self.scope.format || 'h:mm a';
  	return dateFilter(new Date(), format);
  };

  return self;
};