function delayedTesting(anotherFunction:(()=>number) | ((a:number)=>number)){
  setTimeout(anotherFunction)
}

function log(){
  console.log("Hi there")
  return 1
}

delayedTesting(log)


