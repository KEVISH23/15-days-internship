import React,{useState} from 'react'

const ExerciseValidateFormInput = () => {
    const [message, setMessage] = useState('')
    const [text, setText] = useState("");
    const inputHandler = (e)=>{
        setText(e.target.value)
    }
    const validateHandler = (e)=>{
        e.preventDefault()
        if(text.length >= 3 ){
            setMessage("Valid message")
        }
        else{
            setMessage("Invalid Message")
        }
    }
  return (
    <div>
      <form>
        <input type="text" onChange={inputHandler} value={text} /><br/>
        <button onClick={validateHandler}>Validate</button><br/>
        {message}
      </form>
    </div>
  );
}

export default ExerciseValidateFormInput