const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/userappnew")

const User=mongoose.model(
  'Users',
  {
    name:String,
    email:String,
    password:String
  }
)


const user=new User({
  name:"Tridib",
  email:"tridibghosh12345@gmail.com",
  password:"123456"
})


user.save()
