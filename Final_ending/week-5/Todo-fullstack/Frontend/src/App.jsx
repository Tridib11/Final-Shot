import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodo=()=>{
     axios.get("http://localhost:3000/todos").then((response)=>{
      setTodos(response.data.Todos)
    })   
  }

  useEffect(()=>{
     fetchTodo()
  },[])

  return (
    <div>
      <CreateTodo onTodoCreated={fetchTodo} />
      <DisplayTodo Todos={todos} onComplete={fetchTodo} />
    </div>
  );
}

export default App;