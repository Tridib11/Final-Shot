const mongoose =require("mongoose")

const TodoSchema=new mongoose.Schema({
  title:String,
  description:String,
  done:Boolean
})

const TodoModel=mongoose.model("Todo",TodoSchema)
module.export=TodoModel