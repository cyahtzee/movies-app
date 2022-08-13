import React from 'react';
import Movie from './movie';

const MoviesTable = (props) => {
    const { movies, onDelete} = props;

    return (
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
          {movies.map(movie => (
            <Movie key={movie._id}
                   movie={movie}
                   onDelete={onDelete} />
        ))}
        </tbody>
      </table>
    );
}

export default MoviesTable;
