const express = require("express");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  const todoBody = req.body;
  const parsedBodyCheck = createTodo.safeParse(todoBody);
  if (!parsedBodyCheck.success) {
    return res.status(411).json({
      msg: "Incorrect inputs",
    });
  }

  await Todo.create({
    title: todoBody.title,
    description: todoBody.description,
    completed: false,
  });
  res.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    Todos: todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "Incorrect inputs",
    });
  }

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
    return res.status(400).json({
      msg: "Invalid todo ID format",
    });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.body.id, {
      completed: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        msg: "Todo not found",
      });
    }

    return res.json({
      msg: "Todo marked as completed",
      todo: updatedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server error while updating todo",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
