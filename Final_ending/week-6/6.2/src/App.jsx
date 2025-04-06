import React, { useState } from 'react'
import "./App.css"
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const[id,setId]=useState(1)
  return (
    <div>
      <button onClick={()=>{
        setId(1)
      }}>1</button>
      <button onClick={()=>{
        setId(2)
      }}>2</button>
      <button onClick={()=>{
        setId(3)
      }}>3</button>
      <button onClick={()=>{
        setId(4)
      }}>4</button>
      <Todo id={id}/>
    </div>
  )
}

function Todo({id}){
  const[todo,setTodo]=useState({})

  useEffect(()=>{
    axios.get("http://localhost:3000/todo?id="+id)
    .then(function(response){
      setTodo(response.data.todo)
    })
  },[id])
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>
}

export default App
