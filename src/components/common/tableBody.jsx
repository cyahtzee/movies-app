import React, { Component } from 'react';
import _ from 'lodash';
import { nanoid } from 'nanoid';

class TableBody extends Component {
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={nanoid()}>
            {columns.map(column => (
              <td key={nanoid()}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  }
}

export default TableBody;
