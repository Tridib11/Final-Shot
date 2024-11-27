import { useState } from "react"
import "./App.css"
function App(){
  const[name,setName]=useState("tridib")
  return <div>
    <button onClick={()=>{
      setName(Math.random())
    }}>Click to make the number random</button>
    <Header title={name}/>
    <Header title={"Tridib"}/>
  </div>
}


// function Button({random}){
//   return <div>
//     
//   </div>
// }


function Header({title}){
  return <div>
    <h2>My name is {title}</h2>
  </div>
}

export default App