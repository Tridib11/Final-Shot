import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[todos,setTodos]=useState([])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return(
    <div>
      <h1>Todo</h1>
      
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)} // Update title state
      />
      <br />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)} // Update description state
      />
      <br />
      <br /><br />

      <button
        onClick={() => {
          if (title && description) {
            // Add new todo
            setTodos([
              ...todos,
              {
                id: todos.length + 1, // Generate unique ID
                title,
                description,
                done: false,
              },
            ]);
            setTitle(""); // Clear title input
            setDescription(""); // Clear description input
          }
        }}
      >
        Add todo
      </button>

      <br />

      {todos.map((todo)=>{
        return <Todo key={todo.id}  title={todo.title}   description={todo.description}/>
      })}
    </div>
  )
}



function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}

export default App
