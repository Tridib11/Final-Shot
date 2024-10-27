const { Admin } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  try {
    const value = await Admin.findOne({ username, password });
    next();
  } catch (error) {
    // Handle the error appropriately, for example, by sending an error response
    res.status(403).send('User doesnt exits');
  }
}

module.exports = userMiddleware;