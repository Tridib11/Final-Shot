import React, { useState } from 'react'
import './App.css'

function App(){
const[counter,setCounter]=useState(0)
  return (
    <div>
      <CustomButton counter={counter} setCounter={setCounter}></CustomButton>
    </div>
  )
}

function CustomButton(props){

  function onCLickHandler(){
    props.setCounter(props.counter+1)
  }
  return <button onClick={onCLickHandler}>
    Counter {props.counter}
  </button>
}

export default App
