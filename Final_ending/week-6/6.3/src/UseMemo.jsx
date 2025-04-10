import React, { useMemo, useState } from 'react'

function UseMemo() {
  const[Text,setText]=useState("")

  const expensiveOperation=useMemo(()=>{
    console.log("expenside function")
    let total=0;
    for(let i=1;i<=10000;i++){
      total+=i
    }
    return total
  },[])

  const number=expensiveOperation

  console.log("Component reendered")
  return (
    <div>
      <input type="text" name="" id="" onChange={(e)=>{
        setText(e.target.value)
      }} />

      <div>Total Sum {number}</div>
      <div>Entered Text: {Text}</div>
    </div>
  )
}

export default UseMemo
