import React, { useCallback, useState } from 'react'

// function Test() {
//   const [count, setCount] = useState(0);

//   // Function stays the same unless `count` changes
//   const handleClick = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );

  
// }

function Test() {
  const [count, setCount] = useState(0);

  // Function gets recreated every render
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
}



const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child component re-rendered");

  return (
    <div>
      <p>I am the child component.</p>
      <button onClick={onClick}>Increment from Child</button>
    </div>
  );
});



export default Test
