import React, { useRef } from 'react';

function Test() {
  const countRef = useRef(0); 

  const incrementRef = () => {
    countRef.current += 1; 
    console.log('Ref count:', countRef.current); 
  };

  return (
    <div>
      <button onClick={incrementRef}>
        Counter {countRef.current} 
      </button>
    </div>
  );
}

export default Test;
