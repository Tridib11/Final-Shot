import React, { useState } from 'react'
import "./App.css"
function App() {
  const[title,setTitle]=useState("My name is Tridib")
  return (
    <div>
      
    </div>
  )
}


function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
