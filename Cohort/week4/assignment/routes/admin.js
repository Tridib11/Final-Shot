const express=require("express")
const {Admin}=require('../db')
const router=express.Router()


router.post('/signup',async(req,res)=>{
  const username=req.body.username
  const password=req.body.password

  const existingUser=await Admin.findOne({username})
  if(!existingUser){
    await Admin.create({
      username,
      password
    })
  
    return res.json({
      msg:"Admin created sucessfully"
    })
    
  }

  return res.status(403).json("Username already exists")



})

router.post('/courses',(req,res)=>{

})

router.get('/courses',(req,res)=>{

})

module.exports=router