import React, { useState } from 'react'
import "./App.css"
function App() {
  const[title,setTitle]=useState("My name is Tridib")
  return (
    <div>
      <Header title={title}></Header>
      <button onClick={()=>{
        setTitle("My name is "+Math.random())
      }}>Update the Title</button>
    </div>
  )
}


function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
