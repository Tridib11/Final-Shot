const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const getRandomValue = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

app.get("/notification", (req, res, err) => {
  try {
    const responseData = {
      network: getRandomValue(),
      jobs: getRandomValue(),
      messaging: getRandomValue(),
      notifications: getRandomValue(),
    };
    res.json(responseData);
  } catch (e) {
    console.error(e);
  }
});

app.listen(3000, () => {
  console.log("Sever started ");
});
