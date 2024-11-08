function arrayToHex(byteArray){
  let hexString='';
  for(let i=0;i<byteArray.length;i++){
    hexString+=byteArray[i].toString(16).padStart(2,"0");
    //toString(16) converts it into hexadecimal
    //
  }
  return hexString
}

const byteArray=new Uint8Array([72,101,108,108,111]) //corresponds to Hello
const s="Hello"

const byteArray1= new TextEncoder().encode(s)
console.log(byteArray1)
console.log(byteArray)

console.log(arrayToHex(byteArray))