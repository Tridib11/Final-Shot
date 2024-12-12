import React, { useState } from 'react'
import "./App.css"
function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}


function Counter(){
const[count,setCount]=useState(0)  
  return <div>
    {count}
    <Decrease setCount={setCount}/>
    <Increase setCount={setCount}/>
  </div>
}
function Decrease({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

function Increase({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

export default App
