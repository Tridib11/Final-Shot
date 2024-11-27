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
      {todos.map(todo=>{
        return <DisplayTodo key={todo.id}  id={todo.id} title={todo.title} description={todo.completed? "Completed" :"Pending"} />
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

function DisplayTodo({id,title,description}){
  return <div>
    <h4>Todo no.{id}</h4>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default FindTodo
