import React, { Component } from 'react';
import Navbar from './components/navbar';
import Movies from './components/movies';
import Counters from './components/counters';
import NotFound from './components/errors/notFound';
import MovieDetails from './components/movieDetails';
import { Routes, Route  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/counters" element={<Counters />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
