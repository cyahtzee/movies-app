import React, { Component } from 'react';
import Table from './common/table';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  columns = [
             {
               path: 'title',
               label: 'Title',
               content: item => <Link to={`/movies/${item._id}`}>{item.title}</Link>
             },
            { path: 'genre.name', label: 'Genre' },
            { path: 'numberInStock', label: 'Stock' },
            { path: 'dailyRentalRate', label: 'Rate' },
            { content: (item) => <button onClick={() => this.props.onDelete(item)} className='btn btn-danger'>DELETE</button> }]

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table columns={this.columns}
             data={movies}
             onSort={onSort}
             sortColumn={sortColumn}/>
    );
  }
}

export default MoviesTable;
