module.exports = angular.module('wfUtils', [])

.value('Utils', {
	arrayToColumns: function (array, numOfColumns) {
    var grid = [];
    var k = 0;
    var count = Math.floor(array.length / numOfColumns);
    for (var i = 0; i < numOfColumns; i++) {
      grid.push([]);
      for (var j = 0; j < count; j++) {
        var item = array[k];
        if (item !== undefined) {
          grid[i].push(item);
          k++;
        }
      }
    }
    return grid;
	}
});

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}