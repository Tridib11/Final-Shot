import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.use(express.json());
app.post("/send", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Server has started");
});
