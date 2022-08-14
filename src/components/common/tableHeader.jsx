import React, { Component } from 'react';


class TabelHeader extends Component {
  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column => <th key={column.label}
                                      onClick={() => this.raiseSort(column) }>
                                  {column.label}</th>)}
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
}

export default TabelHeader;
