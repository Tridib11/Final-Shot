const express = require("express");
const { createTodo, updateTodo } = require("./types");
const Todo = require("./db");
const app = express();

const PORT = 3000;

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
  const updateId = req.body.id;
  const parsedBodyCheck = updateTodo.safeParse(updateId);

  if (!parsedBodyCheck.success) {
    return res.status(411).json({
      msg: "Incorrect inputs",
    });
  }

  await Todo.updateOne(
    {
      _id: updateId,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Server started at Port ${PORT}`);
});
