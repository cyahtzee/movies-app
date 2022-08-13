import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import Movies from './components/movies';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <main className="container m-2">
            < Movies />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
