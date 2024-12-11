import React, { useState } from 'react'
import "./App.css"


function useCounter(){
  const[counter,setCounter]=useState(0)
  function increaseCount(){
    setCounter(counter=>counter+1)
  }

  return {
    counter:counter,
    increaseCount:increaseCount
  }

}
function App() {
  const{counter,increaseCount}=useCounter()
  return (
    <div>
      <button onClick={increaseCount}>Counter {counter}</button>
    </div>
  )
}

export default App
