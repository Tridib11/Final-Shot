function AsyncFunction(){
  let p=new Promise(function(resolve){
    setTimeout(resolve,2000)
  })
  return p;
}


let val=AsyncFunction()

val.then(function(){
  console.log("hi There")
})