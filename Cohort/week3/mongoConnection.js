const express = require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express())

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/userappnew")

const User=mongoose.model(
  'Users',
  {
    username:String,
    email:String,
    password:String
  }
)


app.use(express.json())
app.post("/signup",async(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  const email=req.body.email

  const existingUser=await User.findOne({email:email})
  if(existingUser){
    return res.status(403).json({
      msg:"Email already exists"
    })
  }
  const user=new User({
    username,
    email,
    password
  })
  
  
  user.save()

  return res.status(201).json({
    msg:"User created successfully"
  })
})



app.listen(8000,()=>{
  console.log("Server started")
})
