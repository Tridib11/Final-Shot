function calculateArithmetic(a,b,functionToCall){
  const ans=functionToCall(a,b)
  console.log(ans)
}


function Sum(a,b){
  return a+b
}


calculateArithmetic(10,20,Sum)