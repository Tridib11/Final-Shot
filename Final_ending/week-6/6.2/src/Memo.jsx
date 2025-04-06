import React, { useMemo, useState } from 'react'

function Memo() {
  const [text,setText]=useState("")
  const expensiveFunction=(n)=>{
    console.log("expensive function rerendered")
    let total=0
    for(let i=1;i<n;i++){
      total+=i
    }
    return total
  }

  const sum=useMemo(()=>expensiveFunction(),[]) 

  console.log("Component Rerendered")

  return (
    <div>
      <input type="text" name="" id="" placeholder='Enter a text' onChange={(e)=>{
        setText(e.target.value)
      }} />
      <br />

      <span>Total {sum}</span>
    </div>
  )
}

export default Memo
