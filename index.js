const express=require("express")
const app=express()
const adminRouter=require("./routes/admin")
const userRouter=require("./routes/user")
app.use(express.json())

app.get("/",(req,res)=>{
  res.json({
    msg:"Server is Running"
  })
})
app.use("/admin",adminRouter)
app.use("/user",userRouter)

const PORT=3000

app.listen(PORT,()=>{
  console.log(`Server is running in port ${PORT}`)
})

