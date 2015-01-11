module.exports = angular.module('EDMutils', [])

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
	},
  
  unique: function (arr, field) {
    var o = {}, i, l = arr.length, r = [];
    for(i = 0; i < l; i += 1) {
      o[arr[i][field]] = arr[i];
    }
    for(i in o) {
      r.push(o[i]);
    }
    return r;
  }

})

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}