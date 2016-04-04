function RangeMock(sheetValues, row, column, numRows, numColumns) {
  this.sheetValues = sheetValues;

  this.row = row;
  this.column = column;
  this.numRows = numRows;
  this.numColumns = numColumns;
}

RangeMock.prototype.getRow = function() {
  return this.row;
}

RangeMock.prototype.getRowIndex = function() {
  return this.row;
}

RangeMock.prototype.getLastRow = function() {
  return this.row + this.numRows - 1;
}


RangeMock.prototype.getColumn = function() {
  return this.column;
}

RangeMock.prototype.getValues = function() {
  var sRow = this.row - 1;
  var colSliceBegin = this.column - 1;
  //не включает последний! Поэтому не вычитаем 1
  var colSliceEnd = colSliceBegin + this.numColumns;

  var values = [];
  for (i = 0; i < this.numRows; i++) {
    var rowIndex = sRow + i;
    var row = this.sheetValues[rowIndex];
    var slice = row.slice(colSliceBegin, colSliceEnd);
    values.push(slice);
  }

  return values;
}

module.exports = RangeMock;
