import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Gym",
      description: "Goes to the Gym",
    },
    {
      id: 2,
      title: "Study",
      description: "Study for exams",
    },
    {
      id: 3,
      title: "Shopping",
      description: "Buy groceries",
    },
    {
      id: 4,
      title: "Workout",
      description: "Do a 30-minute workout",
    },
    {
      id: 5,
      title: "Cooking",
      description: "Prepare dinner",
    },
    {
      id: 6,
      title: "Reading",
      description: "Read a book",
    },
  ]);

  return <div>
    <button onClick={()=>{
      setTodos([...todos,{
        id:todos.length+1,
        title:"Some title",
        description:"Some description"
      }])
    }}>Add a Todo</button>
    {todos.map((todo)=>{
      return <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
      </div>
    })}
  </div>;
}

export default Todo;
