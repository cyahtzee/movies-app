import React from 'react';

const GenresList = (props) => {
  const { genres, textProperty, valueProperty, onItemSelect, selectedGenre } = props;
  return (
    <React.Fragment>
      <ul className="list-group">
        {genres.map(genre => (
          <li className={selectedGenre === genre ? 'list-group-item active' : 'list-group-item'} onClick={() => onItemSelect(genre)} aria-curent="true" key={genre[valueProperty]}>{genre[textProperty]}</li>
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
