import React from "react";
import "./DisplayExpense.css";
import DisplayExpenseItem from "./DisplayExpenseItem";
const DisplayExpense = ({expense}) => {
  return (

    <div className="dispDiv">
      {expense.length>0 ? (
        expense.map((val, index) => (
          <DisplayExpenseItem
            key={index}
            title={val.title}
            amount={val.amount}
            date={val.date}
          />
        ))
      ) : (
        <h2 style={{ color: "#116A7B" ,textAlign:"center"}}>No Items Yet...</h2>
      )}
      {/* {console.log(expense)} */}
    </div>
  );
};

export default DisplayExpense;
