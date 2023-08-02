import React, { useState } from 'react'

const ExerciseStyle = () => {
    const [toggler, settoggler] = useState(false)
  return (
    <div>
        <h2 style={{color:toggler?'red':'white'}}>Style It!</h2><br/>
        <button onClick={()=>{settoggler(!toggler)}}>Toggle</button>
    </div>
  )
}

export default ExerciseStyle