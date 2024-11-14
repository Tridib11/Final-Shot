const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../config")
function adminMiddleware(req,res,next){
  const token=req.headers.authorization
  const word=token.split(" ")[1];
  try{
    const decodedValue=jwt.verify(word,JWT_SECRET)
    if(decodedValue.username){
      req.username=decodedValue.username
      next()
    }
    else{
      res.status(401).json({
        msg:"Sorry ,You are not authenticated"
      })
    }
  }
  catch(e){
    console.error(e)
    res.status(400).json({
      msg:"Incorrect inputs"
    })
  }
}

module.exports=adminMiddleware


