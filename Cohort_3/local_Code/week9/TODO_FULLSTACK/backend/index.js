const express=require("express")
const app=express()
const todo=require("./db/db")
const cors=require("cors")

app.get("/",(req,res)=>{
	res.json({
		msg:"Server is up"
	})
})

app.use(cors())


app.get("/todos",async(req,res)=>{
	try{
		const todos=await todo.find({})
		res.json({
			todos
		})
	}
	catch(er){
		console.log(err)
	}
})

app.use(express.json())

app.post("/addTodo",async(req,res)=>{
	const title=req.body.title
	const description=req.body.description
	try{

		await todo.create({
			title,
			description
		})
	
		res.json({
			msg:"Todo Created"
		})
	}
	catch(e){
		console.log(e)
	}
})
app.listen(3000,()=>{
	console.log("Server started")
})