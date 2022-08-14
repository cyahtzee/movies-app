import React, { Component } from 'react';
import Movie from './movie';
import TableHeader from './common/tableHeader';

class MoviesTable extends Component {
  state = {
    columns: [{ path: 'title', label: 'Title' },
              { path: 'genre.name', label: 'Genre' },
              { path: 'numberInStock', label: 'Stock' },
              { path: 'dailyRentalRate', label: 'Rate' }],
  }
  render() {
    const { movies, onDelete, onSort, sortColumn} = this.props;

    return (
      <table className="table">
        <TableHeader columns={this.state.columns}
                     sortColumn={sortColumn}
                     onSort={onSort}/>
        <tbody>
          {movies.map(movie => (
            <Movie key={movie._id}
                   movie={movie}
                   onDelete={onDelete} />
        ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
