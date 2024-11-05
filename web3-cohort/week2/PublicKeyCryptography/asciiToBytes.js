function asciiToBytes(asciiString){
  const arr=[]
  for(let i=0;i<asciiString.length;i++){
    arr.push(asciiString.charCodeAt(i))
  }
  return arr;

}

const ascii="Hello"
const byteArray=asciiToBytes(ascii)
console.log(byteArray)