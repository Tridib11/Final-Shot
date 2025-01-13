import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
  return (
    <div>
      <MyComponent/>
    </div>
  )
}


function MyComponent(){
  const[count,setCount]=useState(0)
  return <div>
    <p>{count}</p>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase Counter</button>
  </div>
}
export default App
