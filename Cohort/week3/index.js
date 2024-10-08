const express=require("express")
const jwt=require("jsonwebtoken")
const jwtPassword="123456"

const app=express()



const All_USERS=[
  {
    username:"tridib",
    password:"123",
    name:"Tridib"
  },
  {
    username:"rohan",
    password:"1234",
    name:"Rohan"
  },
  {
    username:"Raani",
    password:"12",
    name:"Raani123"
  }
]



