import React, { Component } from 'react';
import Counter from './components/counter';
import Navbar from './components/navbarComponent';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <main className="container m-2">
        <Navbar />
        <Counter />
        <Movies />
      </main>
        );
  }
}

export default App;
