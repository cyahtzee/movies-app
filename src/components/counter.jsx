import React, { Component } from 'react';

class Counter extends Component {
   render() {
    const { counter, onDecrement, onIncrement, onDelete, disabled } = this.props;

     return (
        <React.Fragment>
          <div className="row">
            <div className="col-6">
              <span className={this.formatStyle()}>{this.formatCount()}</span>
            </div>
            <div className="col-2">
              <button onClick={() => onIncrement(counter.id)} className='btn btn-secondary btn-sm'>+</button>
            </div>
            <div className="col-2">
              <button onClick={() => onDecrement(counter.id)} className={`${disabled} btn btn-warning btn-sm`}>-</button>
            </div>
            <div className="col-2">
              <button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm'>X</button>
            </div>
          </div>
        </React.Fragment>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  formatStyle() {
    let classes = 'badge m-2'
    classes += this.props.counter.value === 0 ? ' bg-warning' : ' bg-primary';
    return classes;
  }
}

export default Counter;
