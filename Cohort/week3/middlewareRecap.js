const express = require("express");
const app = express();

function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}


let count=0;
function useRequestCountMiddleware(req,res,next){
    count+=1;
    if (count>5){
        return res.status(401).json({
            msg:"Ip blocked"
        })
    }
    next()

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

// app.use(useAgeCheckerMiddleware)

app.get("/ride1", useAgeCheckerMiddleware,useRequestCountMiddleware, (req, res) => {
  res.json({
    msg: "You have successfully ridden the ride 1",
      count
  });
});

app.listen(3000);
