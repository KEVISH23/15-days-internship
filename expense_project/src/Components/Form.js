import React, { useState } from 'react'
import "./Form.css"
const Form = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [tarikh, setTarikh] = useState('')
    const titleHandler = (e) =>{
        setTitle(e.target.value)
    }
    const amountHandler = (e) =>{
        setAmount(e.target.value)
    }
    const tarikhHandler = (e) =>{
        setTarikh(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        let newObj = {
            title:title,
            amount:amount,
            date:new Date(tarikh).toLocaleString()
        }
        // console.log(newObj)
        props.getNewData(newObj)
        setAmount('')
        setTarikh('')
        setTitle('')
    }
  return (
    <div>
      <form className="formDiv" onSubmit={submitHandler}>
        <label className="formLabel">Enter Title</label>
        <input
          type="text"
          onChange={titleHandler}
          value={title}
          placeholder="Enter Title"
        />
        <label className="formLabel">Enter Amount</label>
        <input
          type="text"
          onChange={amountHandler}
          value={amount}
          placeholder="Enter Description"
        />
        <label className="formLabel">Pick a Date</label>
        <input type="date" value={tarikh} onChange={tarikhHandler} />
        <button className="formBtn">Submiit</button>
      </form>
    </div>
  );
}

export default Form