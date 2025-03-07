function sum(a,b,fnToCall){
  let ans=a+b
  fnToCall(ans)
}

function displayResult(result){
  console.log(`The ans is ${result}`)
}


sum(10,20,displayResult)