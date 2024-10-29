const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/todo-app")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error(err);
  });
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo=mongoose.model("Todos",todoSchema)
module.exports={
  todo
}
