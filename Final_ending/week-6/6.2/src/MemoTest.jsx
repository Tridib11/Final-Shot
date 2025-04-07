import React, {memo, useState } from 'react'

function MemoTest() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <ButtonComponent/>
      <button onClick={()=>{
        setCount(count+1) 
      }}>Click me {count}</button>
    </div>
  )
}

const ButtonComponent=memo(()=>{
  console.log("Button Component rerenderdd")

  return <div>
      <button>Button CLicked</button>
  </div>
})

export default MemoTest
