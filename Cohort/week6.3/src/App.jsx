import { useState } from 'react'
import './App.css'

import React from 'react'

function App() {

  const[counter,setCounter]=useState(0)
  return (
    <div>
      <button onClick={()=>{
        setCounter(count=>count+1)
      }}>Counter is updated to {counter}</button>
    </div>
  )
}

export default App
