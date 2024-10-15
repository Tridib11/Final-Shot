const express=require("express");
const app=express();



function isOldEnough(age){
    if (age>=14){
        return true
    }else{
        return false
    }
}
app.get("/ride1",(req,res)=>{

    if (isOldEnough(req.query.age)){
        res.json({
            msg:"You have successfully ridden the ride 1"
        })
    }else{
        res.json({
            msg:"Sorry you are not of 14 yet"
        })
    }
})

app.listen(3000)