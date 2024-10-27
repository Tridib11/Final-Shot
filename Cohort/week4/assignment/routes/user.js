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

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  return res.status(200).json({
    Courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  try {
    // Fetch the course details to get both courseId and title
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Update the user's purchasedCourses by pushing an object with both courseId and title
    await User.updateOne(
      { username },
      {
        $push: { purchasedCourses: { courseId: course._id, title: course.title } }
      }
    );

    return res.json({
      message: "Purchase complete"
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "An error occurred",
      error: err.message
    });
  }
});



router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.headers.username
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses.map((item) => item.courseId)
    }
  });

  return res.json({
    courses: courses
  });
});


module.exports = router;
