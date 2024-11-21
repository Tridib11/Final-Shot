import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>{
        setCount(count=>count+1)
      }}>Conter {count}</button>
    </div>
  )
}

export default App
