const mongoose=require("mongoose")
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI)
        .then(()=>console.log("Database Connected"))
        .catch((err)=>console.error("Database connection error",err))


const AdminSchema=new mongoose.Schema({

})

const UserSchema=new mongoose.Schema({

})

const CourseSchema=new mongoose.Schema({

})

const Admin=mongoose.model('Admin',AdminSchema)
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',CourseSchema)

module.exports={
  Admin,
  User,
  Course
}

