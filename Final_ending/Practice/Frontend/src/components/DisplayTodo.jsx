import React from 'react';
import axios from 'axios';

function DisplayTodo({ todos, onComplete, isLoading }) {
  const markAsComplete = async (id) => {
    try {
      await axios.put("http://localhost:3000/completed", {
        id: id
      });
      onComplete();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  if (!todos.length) {
    return (
      <div className="empty-state">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="todo-list animate-fade-in">
      {todos.map((todo) => (
        <div 
          key={todo._id} 
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <button 
            className={`btn ${todo.completed ? 'btn-complete' : ''}`}
            onClick={() => markAsComplete(todo._id)}
          >
            {todo.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default DisplayTodo;
