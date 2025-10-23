import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={increment} className="btn">
        Increase
      </button>
      <button onClick={decrement} className="btn">
        Decrement
      </button>
    </>
  );
}

export default Counter;
