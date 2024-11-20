const jwt=require("jsonwebtoken")
const JWT_SECRET="S3Cr3T"
async function auth(req,res,next){
  const token=req.headers.authorization
  const response = await jwt.verify(token, JWT_SECRET)
  console.log("From response middleware:", response.id);
  if(response){
    req.userId=response.id
    next()
  }
  else{
    res.status(403).json({
      message:"Incorrect Credentials"
    })
  }
}

module.exports={
  auth,
  JWT_SECRET
}