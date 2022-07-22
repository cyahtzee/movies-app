import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
   };


   render() {
     return (
       <div>
        <span className={this.formatStyle()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-2'>Increment</button>
        <button onClick={this.handleDecrement} className='btn btn-danger btn-sm'>Decrement</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }

  formatStyle() {
    let classes = 'badge m-2'
    classes += this.state.count === 0 ? ' bg-warning' : ' bg-primary';
    return classes;
  }
}

export default Counter;
