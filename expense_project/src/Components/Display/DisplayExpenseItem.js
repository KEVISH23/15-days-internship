import React from 'react'
import './DisplayExpense.css'
const DisplayExpenseItem = ({title,amount,date}) => {
    const getYear = new Date(date).getFullYear().toString()
    const getMonth = new Date(date).getMonth().toString() 
       const getDate = new Date(date).getDate().toString()
  return (
    <div className="itemDisp">
      <div className="dateDisp">
        {getDate + " / " + (parseInt(getMonth) + 1) + " / " + getYear}
      </div>
      <div className="titleDisp">{title.toUpperCase()}</div>
      <div className="dateDisp">₹{amount}</div>
    </div>
  );
}

export default DisplayExpenseItem