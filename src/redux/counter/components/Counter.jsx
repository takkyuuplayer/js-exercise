import React from 'react';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
}) => (
  <p>
    Clicked: {value} times
    {' '}
    <button onClick={onIncrement}>
      +
    </button>
    {' '}
    <button onClick={onDecrement}>
      -
    </button>
    {' '}
    <button onClick={() => { if(value % 2) { onIncrement() }}}>
      Increment if odd
    </button>
    {' '}
    <button onClick={() => { setTimeout(onIncrement, 1000)}}>
      Increment async
    </button>
  </p>
)

export default Counter;
