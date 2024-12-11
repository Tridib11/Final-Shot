import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css"

export function usePosttitle(url){
  const[loading,setLoading]=useState(true)
  const[finalData,setFinalData]=useState({})
  async function getPosts(){
    setLoading(true)
    const response = await axios.get(url)
    setLoading(false)
    setFinalData(response.data)
  }
  useEffect(()=>{
    getPosts()
  },[url])

  return {
    finalData,
    loading
  }
}