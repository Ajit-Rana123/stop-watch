import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let stopwatchin=undefined;
function App() {
  const[watch,setwatch]=useState(0)
    const[disable,setdisable]=useState(false)

  const startwatch=()=>{
   stopwatchin= setInterval(() => {
      setwatch((x)=>x+1)
    }, 1000);
    setdisable(true)
  }

   const stopwatch=()=>{
    clearInterval(stopwatchin)
        setdisable(true)
  }

   const resetwatch=()=>{
    setwatch(0)
    setdisable(false)
  }

  return (
    <div className="App">
      <h1>Start Stop Watch</h1>
      <h1>{watch}</h1>
      <button className='start' disabled={disable} onClick={startwatch}>Start</button>
      <button className='stop' onClick={stopwatch}>Stop</button>
      <button className='reset' onClick={resetwatch}>Reset</button>
    </div>
  );
}

export default App;
