const mongoose = require("mongoose");
const link = require("../Mongo_ConnectionString");

mongoose.connect(link)
  .then(() => {
    console.log("DB connected");
  });


const todoSchema=new mongoose.Schema({
  title:String,
  description:String,
})

const todo=mongoose.model("todos",todoSchema)

module.exports=todo


