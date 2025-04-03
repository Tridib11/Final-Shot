import React, { useState } from 'react'
import axios from 'axios'
export default function CreateTodo({onCreate}) {
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  return (
    <div>
      <input type="text" name="" id="" value={title} onChange={(e)=>{
        setTitle(e.target.value)
      }} /> <br />
      <input type="text" name="" id="" value={description} onChange={(e)=>{
        setDescription(e.target.value)
      }} />
      <br />

      <button onClick={()=>{
        axios.post("http://localhost:3000/todo",{
          title,
          description
        }).then(()=>{
          setTitle("")
          setDescription("")
          onCreate()
        })


      }}>Add Todo</button>
    </div>
  )
}
