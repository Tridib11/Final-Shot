
import './App.css'

import axios from 'axios'; // Import Axios
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]); // State to store todos
  const [title, setTitle] = useState(''); // State for title input
  const [description, setDescription] = useState(''); // State for description input

  // Fetch todos from the backend
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/todos');
      setTodos(response.data.todos || []); // Update todos state
    } catch (err) {
      console.error('Error fetching todos:', err);
    }
  };

  // Add a new todo
  const addTodo = async () => {
    if (!title || !description) {
      alert('Please provide both a title and a description');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/addTodo', {
        title,
        description,
      });
      if (response.data.msg === 'Todo Created') {
        alert('Todo added successfully!');
        setTitle(''); // Clear inputs
        setDescription('');
        fetchTodos(); // Refresh todos after adding
      }
    } catch (err) {
      console.error('Error adding todo:', err);
      alert('Failed to add todo. Please try again.');
    }
  };

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      {/* Form to Add Todo */}
      <input
        type="text"
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>

      {/* Display Todos */}
      <h2>Your Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
