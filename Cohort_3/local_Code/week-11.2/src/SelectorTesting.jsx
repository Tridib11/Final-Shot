import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { CounterAtomPractice, evenSelector } from './store/atoms/CounterAtomPractice'


function SelectorTesting() {
  return (
    <div>
      <RecoilRoot>
        <Buttons/>
        <Counter/>
        <IsEven/>
      </RecoilRoot>
    </div>
  )
}

function Buttons(){ 
  const setCount=useSetRecoilState(CounterAtomPractice)
  return <div>
    <button onClick={()=>{
      setCount(count=>count+2)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decrease</button>
  </div>
}


function Counter(){
  const count=useRecoilValue(CounterAtomPractice)
  return <div>
    {count}
  </div>
}

function IsEven(){
  const isEven=useRecoilValue(evenSelector)
  return <div>
    {isEven?"Even":"Odd"}
  </div>
}

export default SelectorTesting
