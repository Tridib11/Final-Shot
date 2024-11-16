const express=require("express")
const jwt=require("jsonwebtoken")

const app=express()

const JWT_SECRET="tridib11"
const PORT=3000
app.use(express.json())


const users=[]
app.post("/signup",(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  if(users.find(user => user.username === username)){
    return res.status(400).json({
      msg:"User already exists"
    })
  }
  users.push({
    username:username,
    password:password
  })

  res.json({
    msg:"You are signed in successfully"
  })
})

app.post("/signin",(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  if(users.find(user=>user.username===username)){
    const token=jwt.sign({
      username
    },JWT_SECRET)
    res.json({
      msg:token
    })
  }else{
    res.json({
      msg:"Sorry user doesnot exists!"
    })
  }
})

app.post("/me",(req,res)=>{
  const token=req.headers.token
  const decodedData=jwt.verify(token,JWT_SECRET)
  const user = users.find(user=>user.username===decodedData.username)
  if (user) {
    return res.json({
      password: user.password
    })
  } else {
    return res.status(404).json({
      msg: "User not found"
    })
  }
})

app.listen(PORT,()=>{
  console.log(`Server started at port ${PORT}`)
})