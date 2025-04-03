import React, { useState } from 'react';
import axios from 'axios';

export default function CreateTodo({ onCreate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) return;
    
    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:3000/todo", {
        title,
        description
      });
      setTitle("");
      setDescription("");
      onCreate();
    } catch (error) {
      console.error("Error creating todo:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="todo-card animate-bounce-in">
      <h2>Add New Task</h2>
      
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title"
          className="form-control" 
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea 
          id="description"
          className="form-control" 
          placeholder="Add details about your task"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <button 
        className="btn"
        onClick={handleSubmit}
        disabled={isSubmitting || !title.trim()}
      >
        {isSubmitting ? 'Adding...' : 'Add Task'}
      </button>
    </div>
  );
}
