function sum(num1,num2,fnToCall){
  let result=num1+num2
  fnToCall(result)
}

function displayResult(data){
  console.log("Result of the sum is "+data)
}

const ans=sum(10,20,displayResult)


