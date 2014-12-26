module.exports = angular.module('wfUtils', [])

.value('behaviors', {

	disableMousewheel: function() {
    $(document.body).on('mousewheel', function (e) {
		  console.log('mousewheel is disabled');
		  e.preventDefault();
		  e.stopPropagation();
		});
  },

	disableRightClick: function() {
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
	}

});

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}