const express = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const userExists = await User.findOne({ username });
  if (!userExists) {
    await User.create({
      username,
      password,
    });
    return res.json({
      message: "User created Successfully",
    });
  }

  return res.status(403).json({
    message: "Username already exists",
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  const courses = await Course.find({});
  return res.status(200).json({
    Courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {});

module.exports = router;
