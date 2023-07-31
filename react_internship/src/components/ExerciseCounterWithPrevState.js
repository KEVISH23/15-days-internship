import React, { useState } from "react";

const ExerciseCounterWithPrevState = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default ExerciseCounterWithPrevState;
