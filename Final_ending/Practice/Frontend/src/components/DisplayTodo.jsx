import React from 'react'
import axios from 'axios'
function DisplayTodo({todos, onComplete}) {
  
  return (
    <div>
      {todos.map((todo)=>{
        return <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={()=>{
            axios.put("http://localhost:3000/completed",{
              id:todo._id
            })
            .then(()=>{
              onComplete()
            })
          }}>{todo.completed==true?"Completed":"Mark as Complete"}</button>
        </div>
      })}
    </div>
  )
}

export default DisplayTodo
