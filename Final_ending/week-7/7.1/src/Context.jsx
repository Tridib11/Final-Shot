import React, { createContext, useContext, useState } from 'react'

const CountContext=createContext(0)
function Context() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Display/>
        <Button/>
      </CountContext.Provider>      
    </div>
  )
}

function Display(){
  const { count } = useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Button(){
  const { count, setCount } = useContext(CountContext)
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

export default Context
