const { JWT_SECRET } = require("../config");
const { Admin } = require("../db");
const jwt=require("jsonwebtoken")

async function adminMiddleware(req, res, next) {
  // const username = req.headers.username;
  // const password = req.headers.password;
  // try {
  //   const admin=await Admin.findOne({ username, password });
  //   if(!admin){
  //     return res.status(403).json("Admin doesnot exists")
  //   }
  //   next();
  // } catch (err) {
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

module.exports = adminMiddleware;
