import axios from 'axios'
import React, { useState } from 'react'

export default function CreateTodo({onTodoCreated}) {
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  return (
    <div>
      <input type="text" value={title} placeholder='title' onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <br />
      <input type="text" value={description}  placeholder='description' onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
      <br />
      <button onClick={()=>{

        if(title=="" && description==""){
          alert("Please fill the inputs ")
        }
        else{

          axios.post("http://localhost:3000/todo",{
            title,
            description
          }).then(()=>{
            setTitle("")
            setDescription("")
            onTodoCreated()
          })     
        }
      }}>Add a todo</button>
    </div>
  )
}
