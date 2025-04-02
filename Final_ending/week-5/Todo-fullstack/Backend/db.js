const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/todo").then(console.log("DB connected"))

const TodoSchema=new mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
})

const Todo=mongoose.model("Todo",TodoSchema)
module.exports=Todo