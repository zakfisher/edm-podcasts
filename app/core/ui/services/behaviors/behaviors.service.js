module.exports = function () {
  var self = {};

  self.disableMousewheel = function() {
    $(document.body).on('mousewheel', function (e) {
      console.log('mousewheel is disabled');
      e.preventDefault();
      e.stopPropagation();
    });
  };

  self.disableRightClick = function() {
    document.oncontextmenu = RightMouseDown;
    document.onmousedown = mouseDown;
    function mouseDown(e) {
      if (e.which == 3) { //righClick
        e.preventDefault();
      }
    }
    function RightMouseDown() {
      return false;
    }
  };

  return self;
};