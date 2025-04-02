import axios from 'axios'
import React from 'react'

export default function DisplayTodo({Todos,onComplete}) {
  return (
    <div>
      {Todos.map((todo)=>{
        return <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={()=>{
            axios.put("http://localhost:3000/completed",{
              id:todo._id
            }).then(()=>{
              onComplete()
            })
          }}>{todo.completed == true ? "Completed":"Mark as complete"}</button>
        </div>
      })}
    </div>
  )
}

