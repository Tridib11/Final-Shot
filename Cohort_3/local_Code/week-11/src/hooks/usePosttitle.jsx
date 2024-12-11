import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css"

export function usePosttitle(){
  const[post,setPost]=useState({})
  async function getPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    setPost(response.data)
  }
  useEffect(()=>{
    getPosts()
  },[])

  return post.title
}