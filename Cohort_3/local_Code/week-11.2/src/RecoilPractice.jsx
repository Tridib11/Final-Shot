import React from 'react'
import "./App.css"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { CounterAtomPractice } from './store/atoms/CounterAtomPractice'
function RecoilPractice() {  
  return (
    <div>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>     
    </div>
  )
}


function Counter(){
  return <div>
    <CurrentCount/>
    <Increase/>
    <Decrease/>    
  </div>
}

function CurrentCount(){
  const count=useRecoilValue(CounterAtomPractice)
  return <div>
    {count}
  </div>
}

function Increase(){
  const setCount=useSetRecoilState(CounterAtomPractice)
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

function Decrease(){
  const setCount=useSetRecoilState(CounterAtomPractice)
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

export default RecoilPractice
