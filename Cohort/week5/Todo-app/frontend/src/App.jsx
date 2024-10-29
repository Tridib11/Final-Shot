import React, { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import axios from 'axios'
function App() {
  const [todos,setTodos]=useState([])
  axios.get("http://localhost:3000/todos")
  .then((res) => {
    setTodos(res.data.todos);
  })
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
