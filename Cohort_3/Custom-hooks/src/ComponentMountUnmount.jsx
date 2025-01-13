import React, { useEffect } from 'react'
import "./App.css"
function ComponentMountUnmount() {
  return (
    <div>
      <MyComponent/>
    </div>
  )
}



function MyComponent(){
  useEffect(()=>{
    console.error("Component Mounted")

    return ()=>{
      console.log("Component unmounted")
    }
  },[])

  return <div>
    From inside the component
  </div>
}
export default ComponentMountUnmount
