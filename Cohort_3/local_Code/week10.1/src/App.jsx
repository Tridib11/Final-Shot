import "./App.css"
import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/class11' element={<Class11program/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Class11program(){
  return <div>
    <h1>Class 11 things</h1>
  </div>
}

export default App
