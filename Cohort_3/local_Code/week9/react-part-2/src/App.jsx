import { useState } from "react"

function App(){
  const [count,setCount]=useState(0)
  return <div>
    Hello
    <Counter setCount={setCount} />
    {count}
  </div>  
}


function Counter({ setCount }){
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase Counter</button>
    
  </div>
}
export default App