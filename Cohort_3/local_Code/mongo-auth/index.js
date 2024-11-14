const express=require("express")
const app=express()

app.use(express.json())

app.use("/admin",)
app.use("/user",)

const PORT=3000

app.listen(PORT,()=>{
  console.log(`Server is running in port ${PORT}`)
})

