import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFecthingHook() {
  const[todos,setTodos]=useState([])
  useEffect(()=>{
    axios.get("https://final-shot.onrender.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
    })
  },[])
  return (
    <div>
      {todos.map(todo=><Track key={todo.id} todo={todo}/>)}
    </div>
  )
}

function Track({todo}){
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default DataFecthingHook
