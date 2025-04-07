import React, {memo, useCallback, useState } from 'react'

function MemoTest() {
  const[count,setCount]=useState(0)

  const inputFunction=useCallback(()=>{
    console.log("Hi there")
  },[])

  
  return (
    <div>
      <ButtonComponent inputFunction={inputFunction}/>
      <button onClick={()=>{
        setCount(count+1) 
      }}>Click me {count}</button>
    </div>
  )
}

const ButtonComponent=memo(({inputFunction})=>{
  console.log("Button Component rerenderdd")

  return <div>
      <button>Button CLicked</button>
  </div>
})

export default MemoTest
