const { JWT_SECRET } = require("../config");
const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // const username = req.headers.username;
  // const password = req.headers.password;
  // try {
  //   const user = await User.findOne({ username, password });
  //   if(!user){
  //     return res.status(403).json("User doesnot exits")
  //   }
  //   next();
  // } catch (error) {
  //   res.status(403).json("User doesnt exists");
  // }

  const token =req.headers.authorization
  const jwtToken = token.split(" ")[1];
  const decodedValue=jwt.verify(jwtToken,JWT_SECRET)
  if(decodedValue.username){
    next()
  }else{
    res.status(403).json({
      msg:"You are not authenticated"
    })
  }
}

module.exports = userMiddleware;
