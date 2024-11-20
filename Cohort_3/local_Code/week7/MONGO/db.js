const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/TODO")
  .then(()=>{
    console.log("DB connected")
  })



const User=mongoose.Schema({
  email:String,
  password:String,
  name:String
})

const Todo=mongoose.Schema({
  title:String,
  done:Boolean
})