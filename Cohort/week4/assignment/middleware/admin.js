const {Admin}=require("../db")
async function adminMiddleware(req,res,next){
  const username=req.headers.username
  const password=req.headers.password
  try{
    await Admin.findOne({username,password})
    next()
  }catch(err){
    res.status(403).json('User doesnt exists')
  }
}

module.exports=adminMiddleware