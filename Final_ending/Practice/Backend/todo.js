const express = require("express");
const { Todos } = require("./db");
const { createTodo, updateTodo } = require("./TodoTypes");
const { default: mongoose } = require("mongoose");
const cors=require("cors")
const app = express();
const PORT = 3000;

app.use(cors())

app.get("/todos", async (req, res) => {
  const allTodos = await Todos.find({});
  res.status(200).json({
    allTodos,
  });
});

app.use(express.json());

app.post("/todo", async (req, res) => {
  const parsedBody = req.body;
  const parsedResponse = createTodo.safeParse(parsedBody);
  if (!parsedResponse.success) {
    return res.status(411).json({
      msg: "Invalid inputs",
    });
  }
  await Todos.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
  });

  return res.status(200).json({
    msg: "Todo created successfully",
  });
});

app.put("/completed", async (req, res) => {
  const id = req.body;

  const parsedID = updateTodo.safeParse(id);


  if (!parsedID.success) {
    return res.status(411).json({
      msg: "Incorrect inputs",
    });
  }

  if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
    return res.status(400).json({
      msg: "Invalid todo ID format",
    });
  }

  const response = await Todos.findByIdAndUpdate(req.body.id, {
    completed: true,
  });

  return res.status(200).json({
    msg: "Todo updated successfully",
  });
});

app.listen(PORT, () => {
  console.log("Server started");
});
