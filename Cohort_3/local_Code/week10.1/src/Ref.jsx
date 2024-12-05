import React, { useRef } from 'react'
function Ref() {
    const inputRef=useRef()
    function focusOnInput(){
      inputRef.current.focus()
    }

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",height:"100vh"}}>
      Signup
      <input ref={inputRef} type="text" />
      <input  type="text" />
      <button onClick={()=>{
        focusOnInput()
      }}>Submit</button>
    </div>
  )
}

export default Ref
