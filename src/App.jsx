import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     //let counter=15;
     let [counter,setCounter]=useState(15)
     const addvalue=()=>{
       if(counter<20)
          setCounter(counter+1)
        console.log("Add value",counter);
        
     }
     const removeValue=()=>{
        if(counter>0)
          setCounter(counter-1)
        console.log("remove value",counter);
        
     }

  return (
    <>
      <h1>Increase and Decrease counter value </h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Addvalue {counter}</button>
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer {counter}</p>

    </>
  )
}

export default App
