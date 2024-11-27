import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function FindTodo() {
  const[todos,setTodos]=useState([])
  const[id,setId]=useState(0)
  
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
         .then(response =>{
          setTodos(response.data)
         })
  },[id])
  return (
    <div>
      {todos.map(todo=>{
        return <DisplayTodo key={todo.id} title={todo.title} description={todo.completed? "Completed" :"Pending"} />
      })}
      <TextBox setId={setId}/>
    </div>
  )
}


function TextBox({setId}){
  return <div>
    <input type="text" placeholder='id'  onChange={(e)=>{
      setId(e.target.value)
    }} />
  </div>
}

function DisplayTodo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default FindTodo
