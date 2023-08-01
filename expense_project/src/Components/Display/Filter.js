import React, { useEffect, useState } from "react";
import "./DisplayExpense.css";
const Filter = ({expense,filter}) => {
    const [selectedYear, setSelectedYear] = useState('select year');
    let filteredArray = []
    const chageYearHandler = (e) =>{
        setSelectedYear(e.target.value)
        // console.log(selectedYear)
        // if(expense.length>0){
        //    filteredArray = expense.filter((value)=>{
        //         let year = new Date(value.date).getFullYear().toString()
        //         console.log(year)
        //         console.log(selectedYear)
        //         return selectedYear == year
        //     })
        //     console.log(filteredArray)
        //     filter(filteredArray)
        // }
    }
    useEffect(() => {
      if(expense.length>0){
         filteredArray = expense.filter((value)=>{
              let year = new Date(value.date).getFullYear().toString()
              console.log(year)
              console.log(selectedYear)
              return selectedYear == year
          })
          console.log(filteredArray)
          filter(filteredArray,selectedYear)
      }
    }, [selectedYear])
    
  return (
    <div className="dispFilter">
      <h3>Select Year</h3>
      <select className="selectDisp" onChange={chageYearHandler} value={selectedYear}>
        <option value="select year">Select year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default Filter;
