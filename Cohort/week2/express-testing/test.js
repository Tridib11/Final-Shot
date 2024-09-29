const express=require("express")
const app=express()



function sum(n){
  let sum=0
  for(let i=1;i<=n;i++){
    sum+=i;
  }
  return sum;
}
app.get("/",(req,res)=>{
  value=req.query.n
  ans=sum(value)
  res.send(`The total sum is ${ans}`)
})

app.listen(3000,()=>{
  console.log("Server started")
})