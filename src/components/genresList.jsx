import React from 'react';

const GenresList = (props) => {
  const { genres, textProperty, onItemSelect, selectedGenre } = props;

  return (
    <React.Fragment>
      <ul className="list-group">
        {genres.map(genre => (
          <li key={genre.name} className={selectedGenre === genre ? 'list-group-item active' : 'list-group-item'} onClick={() => onItemSelect(genre)}>{genre[textProperty]}</li>
        ))}
      </ul>
    </React.Fragment>
   );
}

GenresList.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default GenresList;
