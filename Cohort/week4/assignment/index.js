const express=require("express")
const app=express()
const adminRouter=require('./routes/admin')
const userRouter=require('./routes/user')


const JWT_SECRET="Tridib_SECRET_TOKEN"

app.use(express.json())
app.use("/admin",adminRouter)
app.use("/user",userRouter)


const PORT=3000

app.listen(PORT,()=>{
  console.log(`Server started at port ${PORT}`)
})

module.exports=JWT_SECRET