import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import DisplayTodo from "./components/DisplayTodo";
import CreateTodo from "./components/CreateTodo";
function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = () => {
    axios.get("http://localhost:3000/todos").then((response) => {
      setTodos(response.data.allTodos);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <CreateTodo onCreate={fetchTodos}/>
      <DisplayTodo todos={todos}  onComplete={fetchTodos}/>
      
    </div>
  );
}

export default App;
