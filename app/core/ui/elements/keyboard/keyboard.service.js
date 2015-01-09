module.exports = function() {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  self.keyFire = function (k) {
    switch (k) {
      case 'space':
        self.scope.string += ' ';
        self.scope.keyboardShift = false;
        break;
      case 'delete':
        self.scope.string = self.scope.string.substring(0, self.scope.string.length - 1);
        self.scope.keyboardShift = false;
        break;
      case 'go':
        // alert(self.scope.string);
        break;
      case 'shift':
        self.scope.keyboardShift = true;
        break;
      default:
        if (self.scope.keyboardShift) {
          k = k.toUpperCase();
        }
        self.scope.string += k;
        self.scope.keyboardShift = false;
    }
  };

  self.getString = function() {
    return self.scope.string;
  };

  self.clearString = function() {
    self.scope.string = '';
  };

  return self;
};