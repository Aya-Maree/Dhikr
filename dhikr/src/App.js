import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the counter value
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to reset the counter
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <div className="buttons-container">
          <button className="edit-button">Edit</button>
          <button className="reset-button" onClick={resetCount}>Reset</button>
        </div>
        <h1 className="counter-display">{count}</h1>
        <button className="tally-button" onClick={incrementCount}>
          <span className="arrow-up"></span>
        </button>
      </div>
    </div>
  );
}

export default App;
