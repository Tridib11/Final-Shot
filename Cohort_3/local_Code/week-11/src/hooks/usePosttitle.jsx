import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css"

export function usePosttitle(url){
  const[finalData,setFinalData]=useState({})
  async function getPosts(){
    const response = await axios.get(url)
    setFinalData(response.data)
  }
  useEffect(()=>{
    getPosts()
  },[url])

  return {finalData}
}