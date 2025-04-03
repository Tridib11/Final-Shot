const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://admin:admin@cluster0.pcgvjbl.mongodb.net/practice")
  .then(() => {
    console.log("DB connected");
  });

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todo", TodoSchema);
module.exports = {
  Todos,
};
