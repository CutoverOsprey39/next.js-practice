'use client';

import React, { useState, useEffect } from "react";


interface CounterProps { //defining props interface
  incrementBy?: number;
  decrementBy?: number;
  buttonColor?: string;
}

const Counter = ({ incrementBy = 1, decrementBy = 1, buttonColor = 'orange' }: CounterProps) => { //default props values
  const [currentCount, setCurrentCount] = useState(0);

  const handleIncrement = () => {
    setCurrentCount((prev) => prev + incrementBy); //prev means previous state
  };

  const handleDecrement = () => {
    setCurrentCount((prev) => prev - decrementBy);
  };

  useEffect(() => {
    console.log("useEffect called - Counter mounted or updated");   //debugging and monitoring updates
  }, [currentCount] );

  useEffect(() => { //alert when count reaches 10
    if (currentCount > 10 || currentCount < -10) {
        alert("Count passed 10 or -10! Resetting to 0.");
        setCurrentCount(0);
    }
  },[currentCount]);

  const divStyle = { //styles for div
    fontFamily: 'Roboto, sans-serif',
    fontSize: '24px',
    border: '2px solid black',
    padding: '10px',
    margin: '10px',
    display: 'inline-block',
    textAlign: 'center' as const,
  };

  const buttonStyle = { //styles for button
    color: buttonColor,
    fontSize: '20px',
    padding: '10px 20px',
    backgroundColor: 'black',
    border: `1px solid ${buttonColor}`,
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '8px',
  };

  return ( //jsx incrementBy and decrementBy are used here
    <div style={divStyle}>
      <h1>Counter Component</h1>
      <button style={buttonStyle} onClick={handleIncrement}>
        +{incrementBy}
      </button>
      <button style={buttonStyle} onClick={handleDecrement}>
        -{decrementBy}
      </button>
      <div style={{ marginTop: '12px', fontWeight: 'bold' }}>
        {currentCount}
      </div>
    </div>
  );
};

export default Counter;