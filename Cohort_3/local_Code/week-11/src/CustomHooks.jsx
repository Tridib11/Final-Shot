import React, { useState } from 'react'
import { usePosttitle } from './hooks/usePosttitle'


function CustomHooks() {
  const[count,setCount]=useState(1);
  const {loading,finalData}=usePosttitle("https://jsonplaceholder.typicode.com/posts/"+count)
  if(loading){
    return <div>
      Loading...
    </div>
  }
  return (
    <div>

      <button onClick={()=>{
        setCount(1)
      }}>Button 1</button>
      <button onClick={()=>{
        setCount(2)
      }}>Button 2</button>
      <button onClick={()=>{
        setCount(3)
      }}>Button 3</button>

      <br /><br />
      {JSON.stringify(finalData)}
    </div>
  )
}

export default CustomHooks
