const fs=require("fs")
fs.readFile("test.txt","utf-8",function(err,data){
  console.log(data)
})

console.log("Hi there")

let a=0;
for(let i=0;i<1000000000;i++){
  a++;
}