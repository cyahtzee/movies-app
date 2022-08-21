import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/movies');
  };

  return (
    <div className="container">
      <h2>
        MovieDetails {useParams().id}
      </h2>
      <button className='btn btn-primary' onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default MovieDetails;
