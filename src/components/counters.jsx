import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 }
    ]
  }

  render() {
    return (
      <div className="d-flex justify-content-start w-25">
        <div className="container my-2">
          {this.state.counters.map(counter => < Counter
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          counter={counter}
          disabled={counter.value === 0 ? 'disabled' : ''}
          key={counter.id} />)}
        </div>
      </div>
    );
  }

  handleIncrement = counterId => {
    const currentCounter = this.state.counters.find(counter => counter.id === counterId);
    currentCounter.value++;
    const counters = Object.assign(this.state.counters, currentCounter)
    this.setState({ counters });
  }

  handleDecrement = counterId => {
    const currentCounter = this.state.counters.find(counter => counter.id === counterId);
    currentCounter.value--;
    const counters = Object.assign(this.state.counters, currentCounter)
    this.setState({ counters });
  }

  handleDelete = counterId => {
    let counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({ counters });
  }
}

export default Counters;
