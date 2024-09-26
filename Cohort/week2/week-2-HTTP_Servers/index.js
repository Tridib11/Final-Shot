const express=require('express')
const app=express()


app.use(express.json())


app.get('/',(req,res)=>{
  res.send("I am working")
})


app.get("/json",(req,res)=>{
  res.json({
    name:"Tridib",
    age:21
  })
})


app.post("/test",(req,res)=>{
  console.log(req.headers['authorization'])
  console.log(req.headers)

  console.log(req.body)
  res.send("<b>Working</b>")
})

app.listen(8000,()=>{
  console.log("Server started")
})