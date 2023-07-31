import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";
import Product from './components/Product';
import ExerciseWithState from './components/ExerciseWithState';
import ExerciseValidateFormInput from './components/ExerciseValidateFormInput';
import ExerciseCounterWithPrevState from './components/ExerciseCounterWithPrevState';
import ExerciseConditional from './components/ExerciseConditional';
function App() {
  const product = [
    {
      title: "Product 1",
      price: "10",
      description: "First product",
    },
    {
      title: "Product 2",
      price: "20",
      description: "Second product",
    },
  ];
  return (
    <div className="App">
      {/* <h1>Exercise Done!</h1>
    <ExpenseItem></ExpenseItem> */}
      {/* <h1>My Demo Shop</h1>
      <Product
        title={product[0].title}
        price={product[0].price}
        description={product[0].description}
      ></Product>
      <Product
        title={product[1].title}
        price={product[1].price}
        description={product[1].description}
      ></Product>
      <button onClick={()=>{console.log("Stored!!!!!")}}>Bookmark</button> */}
      {/* <ExerciseWithState/> */}
      {/* <ExerciseValidateFormInput/> */}
      {/* <ExerciseCounterWithPrevState/> */}
      {/* <ExerciseConditional/> */}
    </div>
  );
}

export default App;
