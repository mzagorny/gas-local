var RangeMock=require('./RangeMock');

/**
 * @param {any[][]} values sheet values
 */
function SheetMock(values) {
  this.values = values;
}

SheetMock.prototype.getLastRow = function() {
  return this.values.length;
}

SheetMock.prototype.getLastColumn = function() {
  var maxLen = 0;
  this.values.forEach(function(r) { if (r.length > maxLen) { maxLen = r.length; } });

  return maxLen;
}

SheetMock.prototype.getRange = function(row, column, numRows, numColumns) {
  numRows = numRows || 1;
  numColumns = numColumns || 1;

  return new RangeMock(this.values, row, column, numRows, numColumns);
}

module.exports=SheetMock;