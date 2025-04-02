const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors")
const mongoose = require("mongoose");
const app = express();


app.use(express.json());
app.use(cors())

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You send the wrong inputs",
    });
  }
  //put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  return res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  return res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(req.body.id)) {
    return res.status(400).json({
      msg: "Invalid todo ID format",
    });
  }

  try {
    const updatedTodo = await todo.findByIdAndUpdate(
      req.body.id,
      { completed: true },
      { new: true }
    );

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

app.listen(3000, () => {
  console.log("Server started");
});
