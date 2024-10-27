const mongoose=require("mongoose")
require('dotenv').config();
mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/course-selling-app")
        .then(()=>console.log("Database Connected"))
        .catch((err)=>console.error("Database connection error",err))


const AdminSchema=new mongoose.Schema({
  username:String,
  password:String
})

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      },
      title: String // This will store the course title
    }
  ]
});


const CourseSchema=new mongoose.Schema({
  title:String,
  description:String,
  imageLink:String,
  price:Number
})

const Admin=mongoose.model('Admin',AdminSchema)
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',CourseSchema)

module.exports={
  Admin,
  User,
  Course
}

