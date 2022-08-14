import React, { Component } from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
  state = {
    columns: [{ path: 'title', label: 'Title' },
              { path: 'genre.name', label: 'Genre' },
              { path: 'numberInStock', label: 'Stock' },
              { path: 'dailyRentalRate', label: 'Rate' },
              { content: (item) => <button onClick={() => this.props.onDelete(item)} className='btn btn-danger'>DELETE</button> }]
  }

  render() {
    const { movies, onDelete, onSort, sortColumn} = this.props;

    return (
      <table className="table">
        <TableHeader columns={this.state.columns}
                     sortColumn={sortColumn}
                     onSort={onSort}/>
        <TableBody data={movies} onDelete={onDelete} columns={this.state.columns} />
      </table>
    );
  }
}

export default MoviesTable;
