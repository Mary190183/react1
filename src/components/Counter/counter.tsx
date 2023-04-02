import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    count <= 0 ? setCount(0) : setCount(count - 1);
  }
  return (
    <div className="counter">
      <button onClick={decrement} data-testid="button">
        -
      </button>
      <button onClick={increment} data-testid="button">
        +
      </button>
      <h2>{count}</h2>
    </div>
  );
}

export default Counter;
