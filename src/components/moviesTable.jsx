import React from 'react';
import Movie from './movie';

const MoviesTable = (props) => {
    const { movies, onDelete, onSort} = props;
    const headers = ["Title", "Genre", "Stock", "Rate", ""];

    return (
      <table className="table">
        <thead>
          <tr>
            {headers.map(path => <th key={path}
                                       onClick={() => onSort(path) }>
                                    {path}</th>)}
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
