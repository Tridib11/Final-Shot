const userMiddleware = require("../middleware/user");

const router = require("express").Router();
const { User, Course } = require("../db/database");

const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

router.post("/signup", async (req, res) => {
  // router code here
  const username = req.body.username;
  const password = req.body.password;
  await User.create({
    username,
    password,
  });

  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);

    res.json({
      token: token,
    });
  } else {
    res.status(411).json({
      msg: "Incorrect Email or Password",
    });
  }
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    message: "Purchase Complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);

  const courses=await Course.find({
    _id:{
      "$in":user.purchasedCourses
    }
  })

  res.json({
    courses:courses
  })
});

module.exports = router;
