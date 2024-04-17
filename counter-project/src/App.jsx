import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(12);

  const addValue = ()=>{
    counter++;
    if(counter <= 20){
      setCounter(counter)
    } else {
      counter = 20
    }
  }

  const removeValue = ()=>{
    counter--;
    if(counter >= 0){
      setCounter(counter)
    } else {
      counter = 0
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Value: {counter}</h2>
      <button onClick={addValue}>Increase Count {counter}</button>
      <br/>
      <button onClick={removeValue}>Decrease Count {counter}</button>
    </>
  )
}

export default App
