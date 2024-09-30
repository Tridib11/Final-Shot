const express=require("express")
const zod=require("zod")
const app=express()


const schema=zod.array(zod.number())
app.use(express.json())
app.post("/health-check",(req,res)=>{
  const kidneys=req.body.kidney
  const response=schema.safeParse(kidneys)
  res.send({
    response
  })
})

app.listen(3000)
