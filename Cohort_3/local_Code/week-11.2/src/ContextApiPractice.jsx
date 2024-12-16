import React, { createContext, useContext, useState } from 'react'
import "./App.css"
const CounterContext=createContext()
function ContextApiPractice() {

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
    <div  style={{display:"flex"}}>

    <Increase/>
    <Decrease/>
    </div>
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

function Decrease(){
  const {setCount}=useContext(CounterContext)
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

export default ContextApiPractice
