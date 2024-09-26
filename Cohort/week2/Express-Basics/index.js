const express=require("express")
const app=express()


function sum(val){
  let sum=0;
  for(let i=1;i<=val;i++){
    sum+=i;
  }
  return sum;
}
app.get("/sum",(req,res)=>{
  const header=req.query.n
  let ans=sum(header)
  res.send(`The sum from 1 to ${header} is ${ans}`)
})


app.listen(8000,()=>{
  console.log("Server started")
})