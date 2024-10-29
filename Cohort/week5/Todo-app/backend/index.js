const express=require("express")
const { createTodo } = require("./types")

const app=express()

app.use(express.json())

app.post("/todo",(req,res)=>{
  const createPayload=req.body
  const parsedPayload=createTodo.safeParse(createPayload)
  if(!parsedPayload.success){
    res.status(411).json({
      msg:"You send the wrong inputs"
    })
  }
  //put it in mongodb

})

app.get("/todos",(req,res)=>{

})

app.put("/completed",(req,res)=>{

})


app.listen(3000,()=>{
  console.log("Server started")
})