import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import DisplayExpense from "./Components/Display/DisplayExpense";
import { useState, useEffect } from "react";
import Filter from "./Components/Display/Filter";

function App() {
  const [arr, setarr] = useState([
    { title: "vadapau", amount: "20", date: "8/1/2023, 5:30:00 AM" },
  ]);
  const [filterArr, setFilterArr] = useState([]);
  const [year, setYear] = useState("");
  const [yearArr, setYearArr] = useState();
  useEffect(() => {
    setYearArr(
      arr?.map((value) => {
        return new Date(value.date).getFullYear().toString();
      })
    );
  }, [arr]);

  const newHandler = (obj) => {
    setarr((prev) => {
      return [obj, ...prev];
    });

    let demoyear = new Date(obj.date).getFullYear().toString();
    // console.log(year)
    if (demoyear == year) {
      setFilterArr((prev) => {
        return [obj, ...prev];
      });
    }
  };
  const filterHandler = (array, selectedYear) => {
    // console.log(array)
    setFilterArr(array);
    setYear(selectedYear);
  };

  return (
    <>
      <Header getNew={newHandler} />
      <Filter
        expense={arr}
        filter={filterHandler}
        getYearArr={new Set(yearArr)}
      />
      {year == "select year" ? (
        <DisplayExpense expense={arr} />
      ) : (
        <DisplayExpense expense={filterArr} />
      )}
    </>
  );
}

export default App;
