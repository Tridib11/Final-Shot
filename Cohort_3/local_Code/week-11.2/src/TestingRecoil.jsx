import React, { useState } from 'react'
import "./App.css"
import { RecoilRoot } from 'recoil'
function TestingRecoil() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}


function Counter(){
const[count,setCount]=useState(0)  
  return <div>
    <CurrentCount count={count}/>
    <Decrease setCount={setCount}/>
    <Increase setCount={setCount}/>
  </div>
}
function CurrentCount({count}){
  return <div>
    {count}
  </div>
}

function Decrease({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

function Increase({setCount}){
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

export default TestingRecoil
