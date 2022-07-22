import React, { Component } from 'react';
import Movie from './movie';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
   }

  render() {
    console.log(this.state.movies);

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
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={() => this.onDelete(movie._id)} className='btn btn-danger'>DELETE</button></td>
              </tr>
          ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  onDelete = (id) => {
    this.handleDelete(id);
  }

  handleDelete = (id) => {
    let movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies });
  }
}

export default Movies;
