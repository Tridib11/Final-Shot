const express=require("express")
const bcrypt=require("bcrypt")
const app=express()
const jwt=require("jsonwebtoken")
const {auth,JWT_SECRET}=require("./auth")
const {UserModel,TodoModel}=require("./db")

app.use(express.json())

app.post("/signup",async(req,res)=>{
  const email=req.body.email
  const password=req.body.password
  const name=req.body.name


  const hashedPassword=await bcrypt.hash(password,5)
  await UserModel.create({
    email:email,
    password:hashedPassword,
    name:name
  })
  res.json({
    message:"You are signed up"
  })
})

app.post("/signin",async(req,res)=>{
  const email=req.body.email;
  const password=req.body.password
  const user=await UserModel.findOne({
    email:email,
    password:password
  })
  console.log(user)

  if(user){
    const token=jwt.sign({
      id:user._id.toString()
    },JWT_SECRET)
    res.json({
      token:token
    })
  }else{
    res.status(403).json({
      message:"Incorrect Credentials"
    })
  }
})


app.post("/todo",auth,async(req,res)=>{
  const userId=req.userId
  const title=req.body.title
  const done=req.body.done
  await TodoModel.create({
    userId,
    title,
    done
  })

  res.json({
    message:"Todo created"
  })
})


app.get("/todos",auth,async(req,res)=>{
  const userId=req.userId
  const todos=await TodoModel.find({
    userId
  })
  res.json({
    todos
  })
})


app.listen(3000,()=>{
  console.log("Server started")
})