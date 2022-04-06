import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  function incrementNumberClick(){
    setNumber(number + 1);
  }

  function decrementNumberClick(){
    setNumber(number - 1);
  
  }

  function resetNumberClick(){
    setNumber(0);
  }


  function randomNumberClick(){
    // update: 
    // 1) make it so only randomizes to an even number
    // 2) make it so only randomizes between 600-700
    let max = 700;
    let min = 600;
    setNumber(Math.floor(Math.random() * (max - min + 1) + min));
    
  }



  let alerts = 'notifications';

  if(number === 1){
    alerts = 'notification';
  }

  return (
    <div className="App">
      <h1 id='number'>{number}</h1>
      <button onClick={decrementNumberClick} disabled={number === 0} className='btn'>-</button>
      <button onClick={resetNumberClick} className='btn'>Reset</button>
      <button onClick={randomNumberClick} className='btn'>Randomize</button>
      <button onClick={incrementNumberClick} className='btn'>+</button>
      <p>You have {number} {alerts}</p>
    </div>
  );
}

export default App;
