const express=require("express");
const app=express();

app.get("/ride1",(req,res)=>{
    res.json({
        msg:"You have successfully ridden the ride 1"
    })
})

app.listen(3000)