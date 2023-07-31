import React, { useState } from "react";

const ExerciseWithState = () => {
  const [price, setPrice] = useState(100);
  return (
    <div>
      ${price}
      <br />
      <button onClick={()=>{setPrice(75)}}>Apply Discount</button>
    </div>
  );
};

export default ExerciseWithState;
