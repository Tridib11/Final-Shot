const express=require("express")
const jwt=require("jsonwebtoken")
const app=express()


const secret="ssssshhhhhh"

const ALL_USERS=[
  {
    username:"tridib@mail.com",
    password:"123",
    name:"Tridib"
  },
  {
    username:"Rohan@mail.com",
    password:"254",
    name:"Rohan"
  },
  {
    username:"Something@mail.com",
    password:"Something",
    name:"Something"
  }
]


async function userExists(username, password) {
  return ALL_USERS.find(i => i.username === username && i.password === password)
}

app.use(express.json())
app.post("/signin", async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  console.log(username, password)
  const userExistsResult = await userExists(username, password)
  console.log(userExistsResult)
  if (!userExistsResult) {
    return res.json({
      msg: "Sorry user does not exist"
    })
  }

  var token = jwt.sign({ username }, secret)
  return res.json({
    token: token
  })
})


app.get("/users",(req,res)=>{
  const token=req.headers.authorization
  try{
    const decoded=jwt.verify(token,secret)
    const username=decoded.username
    return res.json({
      ALL_USERS
    })
  }catch(err){
    return res.status(403).json({
      msg:"Invalid token"
    })
  }

})

app.listen(3000, () => {
  console.log("Server started")
})
