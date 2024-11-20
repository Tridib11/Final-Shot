const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/TODO_Cohot_3")
  .then(()=>{
    console.log("DB connected")
  })


const Schema=mongoose.Schema
const ObjectId=Schema.ObjectId

const User=new Schema({
  email:String,
  password:String,
  name:String
})

const Todo=new Schema({
  title:String,
  done:Boolean,
  userId:ObjectId
})


const UserModel=mongoose.model('users',User)
const TodoModel=mongoose.model('todos',Todo)


module.exports={
  UserModel,
  TodoModel
}