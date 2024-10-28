import React from 'react'
import { useState } from 'react'
function Todo() {

  const[todo,setTodo]=useState([{
    title:"Study",
    description:"Coding",
  },{
    title:"Eat",
    description:"Eat lunch"
  }])


  function addTodo(){
    setTodo([...todo,{
      title:"New Title",
      description:"New Description"
    }])
  }


  return (
    <div>
      <button onClick={addTodo}>Add a random Todo</button>
      {todo.map(function(todo){
        return <TodoDisplay title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}



function TodoDisplay(props){
  return <div>
    <h1>{props.title}</h1>
    <h4>{props.description}</h4>
  </div>
}

export default Todo
