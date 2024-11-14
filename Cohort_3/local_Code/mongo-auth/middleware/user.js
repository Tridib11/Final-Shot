const {JWT_SECRET}=require("../config")
function userMiddleware(req,res,next){
  const token=req.headers.authorization
  const word=token.split(" ")[1];
  try{
    const decodedValue=jwt.verify(word,JWT_SECRET)
    if(decodedValue.username){
      next()
    }
    else{
      res.status.json({
        msg:"Sorry ,You are not authenticated"
      })
    }
  }
  catch(e){
    res.json({
      msg:"Incorrect inputs"
    })
  }
}

module.exports=userMiddleware

