import { useState } from "react"

function App(){
  const [count,setCount]=useState(0)
  return <div>
    <h1>{count}</h1>
    <Counter setCount={setCount} />

    <DCounter setCount={setCount}/>
    <RCounter setCount={setCount}/>

  </div>  
}


function Counter({ setCount }){
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase Counter</button>
    
  </div>
}


function DCounter({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

function RCounter({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(0)
    }}>Reset</button>
  </div>
}
export default App