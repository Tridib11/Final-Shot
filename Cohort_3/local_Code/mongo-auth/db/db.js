const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/course-selling-app-v2-auth")

const Admin_Schema=new mongoose.Schema({

})

const User_Schema=new mongoose.Schema({

})

const Course_Schema=new mongoose.Schema({

})


const Admin=mongoose.model("Admin",Admin_Schema)
const User=mongoose.model("User",User_Schema)
const Course=mongoose.model("Course",Course_Schema)

module.exports={
  Admin,
  User,
  Course
}

