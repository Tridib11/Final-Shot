const express = require("express");
const cors = require("cors");
const { TODOS } = require("./Todos");

const app = express();

app.use(cors());

app.get("/todos", (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const ans = TODOS.find((x) => x.id === randomNumber);
    res.json(ans);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("Server started ");
});
