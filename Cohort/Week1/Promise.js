const fs=require('fs')
function readFile(){
  return new Promise(function (resolve,reject){
    fs.readFile('file.txt','utf-8',(err,data)=>{
      if(err){
        reject(err)
        return
      }
      resolve(data)
    })
  })
}

function print(data){
  console.log(data)
}


function onError(err){
  console.log("Error Triggered")
  console.log(err)
}


readFile().then(print).catch(onError)