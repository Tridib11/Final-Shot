import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/todos");
      setTodos(response.data.allTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Todo Palette</h1>
        <p>Organize your tasks with style</p>
      </div>

      <div className="todo-grid">
        <div>
          <CreateTodo onCreate={fetchTodos} />
        </div>
        
        <div className="todo-card">
          <h2>Your Tasks</h2>
          <DisplayTodo 
            todos={todos} 
            onComplete={fetchTodos} 
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
