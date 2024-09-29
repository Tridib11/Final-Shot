const express=require("express")
const app=express()

app.get("/health-checkup",(req,res)=>{
  const username=req.headers.username
  const password=req.headers.password
  const id=req.headers.id
  if(username!="Tridib" || password!="pass"){
    return res.status(403).json({"message": "Wrong inputs"})
  }
  if(id!=1 && id!=2){
    return res.status(400).json({"message": "Wrong inputs"})
  }
  res.json({"message": "Your kidneys are fine"})
})

app.listen(8000,()=>{
  console.log("Server started")
})