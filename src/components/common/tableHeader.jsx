import React, { Component } from 'react';
import { nanoid } from 'nanoid';


class TabelHeader extends Component {
  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column => column.path && <th className="clickable" key={nanoid()}
                                      onClick={() => this.raiseSort(column) }>
                                  {column.label} {this.renderIcon(column)}</th>)}
        </tr>
    </thead>
    );
  }

  raiseSort = column => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === column.path)
      sortColumn.order = this.props.sortColumn.order === 'asc' ? 'desc' : 'asc';
    else {
      sortColumn.order = 'asc';
      sortColumn.path = column.path;
    }
    this.props.onSort(sortColumn);
  };

  renderIcon = column => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === 'asc')
      return <i className='fa fa-sort-asc' />;
    else {
      return <i className='fa fa-sort-desc' />;
    }
  }
}

export default TabelHeader;
