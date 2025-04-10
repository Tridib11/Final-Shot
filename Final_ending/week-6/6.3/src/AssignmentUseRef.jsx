import React, { useEffect, useRef } from 'react'

function AssignmentUseRef() {

  const inputRef=useRef()

  useEffect(()=>{
    inputRef.current.focus()
  },[inputRef])

  const handleInputButton=()=>{
    inputRef.current.focus()
  }
  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={handleInputButton}>Focus input</button>
    </div>
  )
}

export default AssignmentUseRef
