'use strict';

import React from 'react';

export default class Cell extends React.Component {
  render () {
    return (
      <td class="cell">
        <Cell  />
      </td>
    )
  }
}
