import React, { useState } from 'react'
import "./App.css"
function Todo() {
  const[todo,setTodo]=useState([
    {
    id:1,
    title:"Go to gym",
    description:"From 1 to 3"
    },
    {
      id:2,
      title:"Have breakfast",
      description:"From 1 to 4",
    },
    {
      id:3,
      title:"study",
      description:"From 9 to 10",
    }    
])
  return (
    <div>
      {todo.map(todos=><DisplayTodo key={todos.id} title={todos.title} description={todos.description}/>)}
      <button onClick={()=>{
        setTodo([...todo,{
          id:todo.length+1,
          title:"Random Title",
          description:"Random Description"
        }])
      }}>Add a random todo</button>
    </div>
  )
}

const DisplayTodo=React.memo(function DisplayTodo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
})



export default Todo
