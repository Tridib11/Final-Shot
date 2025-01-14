import React, { useEffect } from 'react'
import { useState } from 'react'


function useDebounce(inputValue,delay){
  const[deboundedValue,setDebouncedValue]=useState(inputValue)
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebouncedValue(inputValue)
    },delay)

    return ()=>{
      clearTimeout(timer)
    }
  },[inputValue,delay])
}
function UseDebounceHook() {
  const [inputValue,setInputValue]=useState("")
  const debouncedValue=useDebounce(inputValue,500)
  return (
    <div>
      <input type="text" placeholder='Search...' value={inputValue} onChange={(e)=>{
        setInputValue(e.target.value) 
      }} />
    </div>
  )
}

export default UseDebounceHook
