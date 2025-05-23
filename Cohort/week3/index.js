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
  for(let i=0;i<All_USERS.length;i++){
    if(All_USERS[i].username===username && All_USERS[i].password===password){
      return true
    }
  }
  return false
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



app.get("/users",(req,res)=>{
  const token=req.headers.authorization
  try{
    const decoded=jwt.verify(token,jwtPassword)
    const username=decoded.username
    // const remainingUsers=[]
    // for(let i=0;i<All_USERS.length;i++){
    //   if(All_USERS[i].username!==username){
    //     remainingUsers.push(All_USERS[i].username)
    //   }
    // }


    return res.json({
      users:All_USERS.filter((value)=>{
        if(value.username==username){
          return false
        }else{
          return true
        }
      })
    })
  }catch(err){
    return res.status(403).json({
      msg:"Invalid Token"
    })
  }
})


app.listen(8000,()=>{
  console.log("Server started")
})





