import React, { Component } from 'react';
import Movie from './movie';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
  state = {
    movies: getMovies(),
    itemsPerPage: 4,
    currentPage: 1
   }

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {paginate(this.state.movies, this.state.currentPage, this.state.itemsPerPage).map(movie => (
              <Movie key={movie._id}
                     movie={movie}
                     onDelete={this.handleDelete } />
          ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          itemsPerPage={this.state.itemsPerPage}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange} />
        </React.Fragment>
    );
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  handleDelete = id => {
    let movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies });
  }
}

export default Movies;
