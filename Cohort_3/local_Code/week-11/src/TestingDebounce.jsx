import React from 'react'
import "./App.css"
import { useDebounce } from './hooks/useDebounce'
function TestingDebounce() {

  function sendDataToBackend(){
    fetch("lol.com")
  }

  const debouncedFn=useDebounce(sendDataToBackend)
  return (
    <div>
      <input type="text" onChange={debouncedFn} />
    </div>
  )
}

export default TestingDebounce
