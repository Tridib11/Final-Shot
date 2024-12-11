import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
function Fetch() {
  const [post,setPost]=useState({})

  // async function getPosts(){
  //   const data=await fetch("https://jsonplaceholder.typicode.com/posts/1")
  //   const json=await data.json()
  //   setPost(json)
  // }

  async function getPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    setPost(response.data)
  }


  

  useEffect(()=>{
    getPosts()
  },[])
  return (
    <div>
      {post.title}
    </div>
  )
}

export default Fetch
