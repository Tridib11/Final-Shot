
import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <div style={style}>
      <BrowserRouter>
        <Routes>
          <Route path='/class11' element={<Class11program/>}/>
          <Route path='*' element={<NotfoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


const style={display:"flex", justifyContent:"center", alignItems:"center",height:"100vh"}

function NotfoundPage(){
  return <div>
    <div style={style}>
      <h1>Sorry page doesn't exists</h1>
    </div>
  </div>
}

function Class11program(){
  return <div>
    <h1>Class 11 things</h1>
  </div>
}

export default App
