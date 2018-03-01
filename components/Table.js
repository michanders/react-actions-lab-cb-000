'use strict';

import React from 'react';
import Row from './Row';

export default class Table extends React.Component {
  render () {
    return (
      <table className="table" onBlur={this.props.onBlur}>
        <tbody>
          {this.props.table.map((row, index) =>
            <Row key={index} row={row} onChange={this.props.onChange.bind(null, index)} onFocus={this.props.onFocus.bind(null, index)}/>)}
        </tbody>
      </table>
    );
  }
}
