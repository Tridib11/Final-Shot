import React, { createContext, useContext, useState } from 'react'
const CounterContext=createContext()
import "./App.css "
function ContextApi() {
  const[count,setCount]=useState(0)
  return (
    <div>
      <CounterContext.Provider value={{count,setCount}}>
        <Counter/>
      </CounterContext.Provider>
    </div>
  )
}


function Counter(){
  const {count}=useContext(CounterContext)
  return <div>
    {count}
    <Increase/>
    <Decrease/>  
  </div>
}


function Decrease(){
  const {setCount}=useContext(CounterContext)
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

function Increase(){
  const {setCount}=useContext(CounterContext)
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

export default ContextApi
