import { useEffect } from "react"
import { useRef } from "react"

export const usePrev=(value)=>{
  const ref=useRef()

  useEffect(()=>{
    console.log("andar aya h")
    ref.current=value
  },[value])
  console.log("niche aya h")
  return ref.current
}