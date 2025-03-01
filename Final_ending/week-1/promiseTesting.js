const fs=require("fs")
function TridibsReadFile(){
  console.log("Inside TridibsReadFile function")
  return new Promise(function (resolve){
    console.log("Inside promise")
    fs.readFile("test.txt","utf-8",function(err,data){
      console.log(data)
      resolve(data)
    })
  })
}


function onDone(){
  console.log("Inside onDone")
}


TridibsReadFile().then(onDone)