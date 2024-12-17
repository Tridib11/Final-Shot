const express = require("express");
const cors = require("cors");
const { TODOS } = require("./Todos");

const app = express();

app.use(cors());

app.get("/todos/:id", (req, res) => {
  try {    
    const todoId = parseInt(req.query.id);
    console.log(todoId)
    const ans = TODOS.find((x) => x.id === todoId);
    res.json(ans);
  } catch (e) {
    console.log(e);
  }
});

app.get("/todos", (req, res) => {
  try {
    const todoId = parseInt(req.query.id);
    console.log(todoId);
    const ans = TODOS.find((x) => x.id === todoId);
    res.json(ans);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal Server Error");
  }
});

// app.get("/todos", (req, res) => {
//   try {
//     const randomNumber = Math.floor(Math.random() * 9) + 1;
//     const ans = TODOS.find((x) => x.id === randomNumber);
//     res.json(ans);
//   } catch (e) {
//     console.log(e);
//   }
// });


app.listen(3000, () => {
  console.log("Server started ");
});
