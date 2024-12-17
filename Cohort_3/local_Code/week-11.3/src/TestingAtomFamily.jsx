import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { todosAtomFamily } from './Components/AtomFamily'

function TestingAtomFamily() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </div>
  )
}

function Todo({id}){
  const currentTodo=useRecoilValue(todosAtomFamily(id))
  return <div>
    {currentTodo.title}
    {currentTodo.description}
  </div>
}

export default TestingAtomFamily
