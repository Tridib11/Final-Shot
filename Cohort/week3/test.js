const express=require("express")
const app=express()


function middleWare(req,res,next){
  const username=req.headers.username
  const password=req.headers.password

  if(username!="Tridib" || password!="pass"){
    return res.status(403).json({"message": "Wrong inputs"})
  }else{
    next()
  }
}


function kidneyId(req,res,next){
  const id=req.headers.id
 
  if(id!=1 && id!=2){
    return res.status(400).json({"message": "Wrong inputs"})
  }
  else{
    next()
  }
}

app.get("/health-checkup",middleWare,kidneyId,(req,res)=>{
  
  res.json({"message": "Your kidneys are fine"})
})

app.listen(8000,()=>{
  console.log("Server started")
})