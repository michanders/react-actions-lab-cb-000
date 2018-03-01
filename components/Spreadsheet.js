'use strict';

import React from 'react';
import actions from '../actions';
import Table from './Table';

export default class Spreadsheet extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      focused: null,
      table: [
        ['']
      ]
    };

    this.handleAddColumn    =   actions.addColumn.bind(this);
    this.handleAddRow       =   actions.addRow.bind(this);
    this.handleRemoveColumn =   actions.removeColumn.bind(this);
    this.handleRemoveRow    =   actions.removeRow.bind(this);
    this.handleChange       =   actions.changeCell.bind(this);
    this.handleFocus        =   actions.focusCell.bind(this);
    this.handleBlur         =   actions.blurCell.bind(this);

  }


  render () {
    return (
      <div className='spreadsheet'>
        <h1>My little spreadsheet</h1>

        <div className='spreadsheet__buttons'>
          <button onClick={actions.addColumn.bind(this)}>Add Column</button>
          {' '}
          <button onClick={actions.addRow.bind(this)}>Add Row</button>
          {' '}
          <button onClick={actions.removeColumn.bind(this)}>Remove Column</button>
          {' '}
          <button onClick={actions.removeRow.bind(this)}>Remove Row</button>
        </div>

        <Table
          table={this.state.table}
          onChange={actions.changeCell.bind(this)}
          onFocus={actions.focusCell.bind(this)}
          onBlur={actions.blurCell.bind(this)} />

        <div className='spreadsheet__focused'>
          {this.state.focused && this.state.focused.join(' - ')}
        </div>
      </div>
    );
  }
}
