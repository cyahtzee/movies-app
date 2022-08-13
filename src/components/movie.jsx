import React, { Component } from 'react';
class Movie extends Component {
  render() {
    const { movie, onDelete } = this.props;

    return (
      <React.Fragment>
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><button onClick={() => onDelete(movie)} className='btn btn-danger'>DELETE</button></td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Movie;
