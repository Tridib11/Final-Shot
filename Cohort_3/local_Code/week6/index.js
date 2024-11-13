const express=require("express")
const app=express()



app.use(express.json())


const users=[]

app.post('/signup',(req,res)=>{
  const username=req.body.username
  const password=req.body.password


  if(users.find(u => u.username == username)) {
    return res.json({
      msg: "You are already signed up"
    });
  }
  users.push({
    username:username,
    password:password
  })

  res.json({
    msg:"You are signed in"
  })
})

app.post("/signin",(req,res)=>{

})

app.listen(3000,()=>{
  console.log("Server started")
})