const express=require('express')
const app=express()

app.get('/',(req,res)=>{
  res.send("I am working")
})


app.get("/json",(req,res)=>{
  res.json({
    name:"Tridib",
    age:21
  })
})

app.listen(8000,()=>{
  console.log("Server started")
})