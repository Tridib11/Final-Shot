const { Admin, Course } = require('../db/database')
const adminMiddleware = require('../middleware/admin')
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const router = require('express').Router()


router.post('/signup' , async(req , res)=>{
    const username=req.body.username
    const password=req.body.password

    await Admin.create({
      username:username,
      password:password
    })

    res.json({
      msg:"Admin created successfully"
    })
})

router.post('/signin' , async(req , res)=>{
  const username=req.body.username
  const password=req.body.password
  const admin=await Admin.find({
    username,
    password
  })

  if(admin){
    const token=jwt.sign({
      username
    },JWT_SECRET)

    res.json({
      token:token
    })
  }else{
    res.status(411).json({
      message:"Incorrect email or password"
    })
  }
})


router.post('/courses',adminMiddleware,async(req,res)=>{
    const title=req.body.title
    const description=req.body.description
    const imageLink=req.body.imageLink
    const price=req.body.price
    const newCourse=await Course.create({
      title,
      description,
      imageLink,
      price
    })

    res.json({
      msg:"Course Created Successfully",courseId:newCourse._id
    })
})

router.get('/courses',adminMiddleware,async(req,res)=>{
  const response=await Course.find({})
  res.json({
    courses:response
  })
})
module.exports  = router