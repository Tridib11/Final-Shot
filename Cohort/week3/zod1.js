const express=require("express")
const zod=require("zod")

const app=express()


function validateInput(arr){
  const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
  })

  const response=schema.safeParse(arr)
  console.log(response)
  return response
}
app.use(express.json())


app.post("/login",async (req,res)=>{
  console.log(req.body)
  const response=validateInput(req.body)
  if(!response.success){
    res.status(400).json({msg:"Wrong inputs"})
    return
  }
  res.status(200).json({msg:"Success"})
})

app.listen(3000)


