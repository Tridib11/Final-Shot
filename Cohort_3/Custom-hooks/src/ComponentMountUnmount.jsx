import React, { useEffect, useState } from 'react'
import "./App.css"
function ComponentMountUnmount() {

  const[render,setRender]=useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setRender(r=>!r)
    },5000)
  },[])
  return (
    <div>
      {render==true?<MyComponent/>:<div>Second Div</div>}
    </div>
  )
} 



function MyComponent(){
  useEffect(()=>{
    console.log("Component Mounted")

    return ()=>{
      console.log("Component unmounted")
    }
  },[])

  return <div>
    From inside the component
  </div>
}
export default ComponentMountUnmount
