import React, { useState } from "react";
const ExerciseConditional = () => {
  const [deleted, setDeleted] = useState(false);
  const deleteHandler = () => {
    setDeleted(true)
  };
  const confirmProceedHandler = () => {
    setDeleted(true);
  };
  const confirmCancelHandler = () => {
    setDeleted(false);
  };
  return (
    <>
      <button onClick={deleteHandler}>Delete</button>
      {deleted ? (
        <div>
          <h4>"Are yousure you want to delete"</h4>
          <button onClick={confirmProceedHandler}>Proceed</button>
          <br />
          <button onClick={confirmCancelHandler}>Cancel</button>
          <br />
        </div>
      ) : null}
    </>
  );
};
export default ExerciseConditional;
