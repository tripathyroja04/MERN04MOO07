import React, { useState } from 'react'
import { useRef } from 'react';
import Home from './Home';


function App() {
 
  const [time,setTime]= useState(0);
  let removeSetIntervalRef = useRef(null);

  function handleStart(){

    if(removeSetIntervalRef.current)
      clearInterval(removeSetIntervalRef.current);

    removeSetIntervalRef.current=setInterval(()=>{
      setTime(time =>time + 1)
    },1000)
  }

  function handleStop(){
    clearInterval(removeSetIntervalRef.current)
  }

  function handleReset(){
    setTime(0)
  }

  // it is manage state across the render by creating the refence object
  // you can access the value by accessing the current key of ref object


  return (
    <div>
      <h1> Time : {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>

      <Home />
    </div>
  )
}

export default App
