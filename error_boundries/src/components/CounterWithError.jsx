import { useState } from "react";

const CounterWithError = () => {
  const [counter, setCounter] = useState(0);
  if (counter > 5) {
    throw new Error("Counter Exceeded");
  }
  return (
    <div>
      Current: {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
};

export default CounterWithError;
