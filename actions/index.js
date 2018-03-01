'use strict';

function addColumn (ev) {
  ev.preventDefault();

  this.setState({
    table: this.state.table.map(row => [...row, ''])
  })
}

function addRow (ev) {
  ev.preventDefault();
  var wide = new Array(this.state.table[0].length).fill("");
  this.setState({
    table: [...this.state.table, wide]
  })
}

function changeCell (rowIndex, columnIndex, ev) {
  const updatedTable = this.state.table;
  updatedTable[rowIndex][columnIndex] = ev.target.value;

  this.setState({
    table: updatedTable
  })
}

function focusCell (rowIndex, columnIndex) {
  this.setState({
    focused: [rowIndex, columnIndex]
  })
}

function blurCell () {
  this.setState({
    focused: null
  })
}

function removeRow (ev) {
  ev.preventDefault();
  var tab = this.state.table;
  if (tab.length > 1) {
    tab.pop();
    this.setState({
      table: tab
    })
  }
}

function removeColumn (ev) {
  ev.preventDefault();
  if (this.state.table[0].length > 1) {
    var tab = this.state.table.map((row) => {
      row.pop();
      return row;
    })
    this.setState({
      table: tab
    })
  }
}

export default {
  addColumn,
  addRow,
  changeCell,
  focusCell,
  blurCell,
  removeRow,
  removeColumn
};
