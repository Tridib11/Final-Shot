import React, { useRef, useState } from 'react'
import { Button } from './Components/Buttons'

function Project1() {
  const ref1=useRef()
  const ref2=useRef()
  const ref3=useRef()
  const ref4=useRef()
  const ref5=useRef()
  const ref6=useRef()
  const[disabled,setDisabled]=useState(true)
  return (
    <div className='flex justify-center h-screen bg-slate-500'>
      <SubOTPBox reference={ref1} onDone={()=>{
        ref2.current.focus()
      }}/>
      <SubOTPBox reference={ref2} onDone={()=>{
        ref3.current.focus()
      }}/>
      <SubOTPBox reference={ref3} onDone={()=>{
        ref4.current.focus()
      }}/>
      <SubOTPBox reference={ref4} onDone={()=>{
        ref5.current.focus()
      }}/>
      <SubOTPBox reference={ref5} onDone={()=>{
        ref6.current.focus()
      }}/>
      <SubOTPBox reference={ref6} onDone={()=>{
        setDisabled(false)
      }}/>
      <br /><br />
      <Button disabled={disabled} children={"signup"}/>
    </div>
  )
}

function SubOTPBox({reference,onDone}){
  return <div>
    <input ref={reference}  type="text"  onChange={()=>{
      onDone()
    }} className='m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white'/>
  </div>
}

export default Project1
