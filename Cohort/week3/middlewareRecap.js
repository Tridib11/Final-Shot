const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function useAgeCheckerMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of 14 yet",
    });
  }
}
app.get("/ride1", useAgeCheckerMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully ridden the ride 1",
  });
});

app.listen(3000);
