const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/testing")
.then(()=>{
  console.log("DB connected")
})

const User=mongoose.model("Users",{
  name:String,
  email:String,
  password:String
})


const user=new User({
  name:"Tridib",
  email:"Tridin@mail.com",
  password:"1230"
})

user.save().then(()=>{
  console.log("user saved")
})