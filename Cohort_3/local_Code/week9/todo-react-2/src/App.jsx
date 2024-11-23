import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[todos,setTodos]=useState([
    {
      id:1,
      title:"Gym",
      description:"Go to gym from 2 to 3",
      done:"true"
    }
  ])

  function randomTodo(){
    setTodos([...todos,{
      id:todos.length+1,
      title:"Random Todo",
      description:"Some Description"
    }])
  }


  return <div>
    {todos.map((todo)=>{
      return <Todo key={todo.id}  id={todo.id} title={todo.title} description={todo.description}/>
    })}

    <button onClick={randomTodo}>Add a random Todo</button>
  </div>



  function Todo(props){
    return <div>
      
      <h1>{props.id} , {props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  }
}




export default App
