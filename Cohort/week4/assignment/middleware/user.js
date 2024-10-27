const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const user = await User.findOne({ username, password });
    if(!user){
      return res.status(403).json("User doesnot exits")
    }
    next();
  } catch (error) {
    res.status(403).json("User doesnt exists");
  }
}

module.exports = userMiddleware;
