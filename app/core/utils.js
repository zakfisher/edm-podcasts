module.exports = angular.module('wfUtils', [])

.value('Utils', {
	arrayToColumns: function (array, numOfColumns) {
    var columns = [];
    var k = 0;
    var count = Math.floor(array.length / numOfColumns);
    for (var i = 0; i < numOfColumns; i++) {
      columns.push([]);
      for (var j = 0; j < count; j++) {
        var item = array[k];
        if (item !== undefined) {
          columns[i].push(item);
          k++;
        }
      }
    }
    return columns;
	}
});

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}