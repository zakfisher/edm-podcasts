module.exports = function() {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  return self;
};