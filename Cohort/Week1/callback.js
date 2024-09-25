function sum(num1,num2,fnToCall){
  let sum=num1+num2
  fnToCall(sum)

}

function displayResult(Result){
  console.log(`The result is ${Result}`)
}


function minus(num1,num2){
  let minus=num1-num2
  
}


sum(2,1,displayResult)