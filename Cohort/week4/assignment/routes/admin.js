const express = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();



router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await Admin.findOne({ username });
  if (!existingUser) {
    await Admin.create({
      username,
      password,
    });

    return res.json({
      msg: "Admin created sucessfully",
    });
  }

  return res.status(403).json("Username already exists");
});

router.post("/courses",adminMiddleware, async(req, res) => {
  const title=req.body.title
  const description=req.body.description
  const imageLink=req.body.imageLink
  const price=req.body.price

  const newCourse=await Course.create({
    title,
    description,
    imageLink,
    price
  })

  res.json({
    message:"Course Created Successfully",courseId:newCourse._id
  })


});

router.get("/courses", async(req, res) => {
  const allCourses=await Course.find({})
  return res.json({
    courses:allCourses
  })

});

module.exports = router;