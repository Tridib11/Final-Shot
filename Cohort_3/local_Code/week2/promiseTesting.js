function setTimeoutPromisified(time){
  return new Promise(function (resolve){
    setTimeout(resolve,time)
  })
}


function callback(){
  console.log("After 2ms")
}

setTimeoutPromisified(2000).then(callback)