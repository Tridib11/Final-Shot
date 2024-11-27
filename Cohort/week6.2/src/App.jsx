import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const[todos,setTodos]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
         .then(response =>{
          setTodos(response.data)
         })
  },[])
  return (
    <div>
      {todos.map(todo=>{
        return <DisplayTodo key={todo.id} title={todo.title} description={todo.completed? "Completed" :"Pending"} />
      })}
    </div>
  )
}

function DisplayTodo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App
