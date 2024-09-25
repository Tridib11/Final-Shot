const fs=require('fs')
function readFile(){
  return new Promise(function(resolve,reject){
    fs.readFile('file.txt','utf-8',(err,data)=>{
      if(err){
        reject(err)
        return;
      }
      resolve(data)
    })
  })
}

async function main(){
  const data=await readFile()
  console.log(data)
}

main()