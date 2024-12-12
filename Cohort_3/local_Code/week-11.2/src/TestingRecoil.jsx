import React, { useState } from 'react'
import "./App.css"
function TestingRecoil() {
  return (
    <div>
      <Counter/>
    </div>
  )
}


function Counter(){
const[count,setCount]=useState(0)  
  return <div>
    <CurrentCount count={count}/>
    <Decrease setCount={setCount}/>
    <Increase setCount={setCount}/>
  </div>
}
function CurrentCount({count}){
  return <div>
    {count}
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

export default TestingRecoil
