const userMiddleware = require('../middleware/user')

const router = require('express').Router()
const {User}=require("../db/database")


const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../config")

router.post('/signup' , async(req , res)=>{
    // router code here
    const username=req.body.username
    const password=req.body.password
    await User.create({
      username,
      password
    })

    res.json({
      msg:"User created successfully"
    })
})


router.post('/signin' , async(req , res)=>{
  const username=req.body.username
  const password=req.body.password
  const user=await User.find({
    username,
    password
  })

  if(user){
    const token=jwt.sign({username},JWT_SECRET)

    res.json({
      token:token
    })
  }else{
    res.status(411).json({
      msg:"Incorrect Email or Password"
    })
  }  
})

router.get('/courses' , (req , res)=>{
  // router code here
})

router.post('/courses/:courseId',userMiddleware,async(req,res)=>{
  
})


router.get('/purchasedCourses',userMiddleware,(req,res)=>{
  
})


module.exports  = router