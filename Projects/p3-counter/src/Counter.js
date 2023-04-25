import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <div>Counter: {counter}</div>
    </div>
  );
}

export default Counter;


    




