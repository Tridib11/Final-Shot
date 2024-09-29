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


function Kidneys(req,res,next){
  
  

}


app.use(express.json())
app.get("/health-checkup",(req,res)=>{
  
  const kidneys=req.body.kidney
  const length=kidneys.length
  res.json({msg:`You have ${length} kidneys`})
})

app.listen(8000,()=>{
  console.log("Server started")
})