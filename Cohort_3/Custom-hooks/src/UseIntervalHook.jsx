import React, { useEffect, useState } from 'react'

function useInterval(fn,timeout){
  useEffect(()=>{
    const timer=setInterval(()=>{
      fn()
    },timeout)
  },[fn,timeout])

  return ()=>{
    clearInterval(timer)
  }
}
function UseIntervalHook() {
  const[count,setCount]=useState(0)
  useInterval(()=>{
    setCount(count=>count+1)
  },1000)
  return (
    <div>
      Timer is at {count}
    </div>
  )
}

export default UseIntervalHook
