const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const value = await User.findOne({ username, password });
    next();
  } catch (error) {
    res.status(403).json('User doesnt exists');
  }
}

module.exports = userMiddleware;