import React, { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      axios.get("https://final-shot.onrender.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);

    axios.get("https://final-shot.onrender.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });

    return () => {
      clearInterval(timer);
    };
  }, [n]);

  return { todos, loading };
}
function DataFecthingHook() {
  const { todos, loading } = useTodos(5);
  return (
    <div>
      {loading
        ? "Loading...."
        : todos.map((todo) => <Track key={todo.id} todo={todo} />)}
    </div>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default DataFecthingHook;
