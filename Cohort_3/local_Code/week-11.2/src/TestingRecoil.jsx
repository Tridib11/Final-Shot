import React, { useState } from 'react'
import "./App.css"
import { RecoilRoot,atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { CounterAtom } from './store/atoms/CounterAtom'
function TestingRecoil() {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}


function Counter(){
  return <div>
    <CurrentCount/>
    <Decrease />
    <Increase />
  </div>
}
function CurrentCount(){
  const count=useRecoilValue(CounterAtom)
  return <div>
    {count}
  </div>
}

function Decrease(){
  const setCount=useSetRecoilState(CounterAtom)
  return <div>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}

function Increase(){
  const setCount=useSetRecoilState(CounterAtom)

  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increase</button>
  </div>
}

export default TestingRecoil
