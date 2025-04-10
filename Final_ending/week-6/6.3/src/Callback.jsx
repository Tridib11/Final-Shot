import React, { useCallback, useState } from 'react'

function Callback() {
  const[count,setCount]=useState(0)

  const incrementCount=useCallback(()=>{
    setCount(count=>count+1)
  },[])
  return (
    <div>
      <h2>{count}</h2>
      <ButtonCount incrementCount={incrementCount}/>
    </div>
  )
}

const ButtonCount = React.memo(({ incrementCount }) => {
  console.log('inside Button Count');
  return (
    <button onClick={incrementCount}>Click me</button>
  );
});
export default Callback
