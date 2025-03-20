import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0);
  function incrementHandler()
  {
    setCount(count+1);
  }
  function decrementHandler()
  {
    setCount(count-1);
  }
  function resetHandler()
  {
    setCount(0);
  }
  return (
    <div className="top">
      <div className='inside'>
      <h1>increment and decrement</h1>
       <div className="box">
         <button onClick={incrementHandler}>+</button>
         <div className='counter'>
          {count}
         </div>
         <button onClick={decrementHandler}>
          -
         </button>
       </div> 

       <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;
