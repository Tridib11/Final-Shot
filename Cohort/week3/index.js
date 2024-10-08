const express=require("express")
const jwt=require("jsonwebtoken")
const jwtPassword="123456"

const app=express()



const All_USERS=[
  {
    username:"tridib",
    password:"123",
    name:"Tridib"
  },
  {
    username:"rohan",
    password:"1234",
    name:"Rohan"
  },
  {
    username:"Raani",
    password:"12",
    name:"Raani123"
  }
]


function userExists(username,password){

}


app.use(express.json())

app.post("/signin",(req,res)=>{
  const username=req.body.username
  const password=req.body.password
  if(!userExists(username,password)){
    return res.status(403).json({
      msg:"User doesnot exists"
    })
  }

  var token=jwt.sign({username:username},jwtPassword)
  return res.json({
    token
  })
})





