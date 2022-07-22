import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <main className="container m-2">
        <Navbar />
        <Counters />
        <Movies />
      </main>
        );
  }
}

export default App;
