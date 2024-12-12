import React, { useState } from 'react'
import { usePrev } from './hooks/usePrev'
import "./App.css"
function TestingUsePrev() {
  const[state,setState]=useState(0)
  const prev=usePrev(state)
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>{
        setState(state=>state+1)
      }}>Click me</button>

      <p>The previous value was {prev}</p>
    </div>
  )
}

export default TestingUsePrev
