import React, { useEffect, useState,memo } from 'react'

function Memo() {
  return (
    <div>
      <Counter/>
    </div>
  )
}
function Counter(){
  const[count,setCount]=useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setCount(count=>count+1)
    },2000)
  },[])

  return <div>
    <CurrentCount/>
    <Increase/>
    <Decrease/>
  </div>
}

const CurrentCount=memo(function (){
  return <div>
    1
  </div>
})

const Increase=memo(function (){
  return <div>
    <button>Increase</button>
  </div>
})

const Decrease=memo(function (){
  return <div>
    <button>Decrease</button>
  </div>
})

export default Memo
