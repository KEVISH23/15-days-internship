import React,{useState} from 'react'
import "./ExerciseCssClass.css"
const ExerciseCssClass = () => {
    const [toggler, settoggler] = useState(false);
  return (
    <div>
      <h2 className={`styleMe ${toggler?'valid':''}`} >Style It!</h2>
      <br />
      <button
        onClick={() => {
          settoggler(!toggler);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default ExerciseCssClass