const express=require("express")
const app=express()
const cors=require("cors")

const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
  },
];

app.use(cors())

app.get("/todos",(req,res)=>{
  return res.json({
    todos
  })
})


app.get("/todo",(req,res)=>{
  const todo=todos.find((todo)=>todo.id==req.query.id)

   res.status(200).json({
    todo
  })
})


// app.get("/todo/:id", (req, res) => {
//   const todoId = parseInt(req.params.id); // get the id from the URL
//   const todo = todos.find((t) => t.id === todoId); // compare with ===

//   if (!todo) {
//     return res.status(404).json({ message: "Todo not found" });
//   }

//   res.json({ todo });
// });


app.listen(3000,()=>{
  console.log(`Server started at 3000`)
})