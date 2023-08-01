import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import DisplayExpense from './Components/Display/DisplayExpense';
import { useState } from 'react';
import Filter from './Components/Display/Filter';

function App() {
  
  const [arr, setarr] = useState([
    { title: "vadapau", amount: "20", date: "8/1/2023, 5:30:00 AM" },
  ]);
  const [filterArr, setFilterArr] = useState([
    
  ]);
  const [year,setYear] = useState('')
  const newHandler = (obj) =>{
    setarr((prev)=>{
      return [
        obj,
        ...prev,
      ]
      
    })
  }
  const filterHandler = (array,selectedYear) =>{
    console.log(array)
    setFilterArr(array)
    setYear(selectedYear)
  }

  
  return (
    <>
      <Header getNew={newHandler} />
      <Filter expense={arr} filter={filterHandler} />
      {year == 'select year' ? (
        <DisplayExpense expense={arr} />
        ) : (
        <DisplayExpense expense={filterArr} />
      )}
    </>
  );
}

export default App;
