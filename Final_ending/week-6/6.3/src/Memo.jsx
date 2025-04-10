import React, { memo, useState } from 'react'
// used to memoise a component untill the props are unchanged

function Memo() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <p>Count {count}</p>

      <button onClick={()=>{
        setCount(count=>count+1)
      }}>Increment</button>
      <ExpensiveComponent count={count}/>
    </div>
  )
}



const ExpensiveComponent=memo(({count})=>{
  console.log("Expensive component Rerendered ")
  return <div>
    Expensicve component {count}
  </div>
})

export default Memo
