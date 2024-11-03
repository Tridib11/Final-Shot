const crypto=require("crypto")
function findingHashWithprefix(prefix){
  let input=0
  while(true){
    let hash="100xdevs"+input.toString()
    let hashedValue=crypto.createHash('sha256').update(hash).digest('hex')
    if(hashedValue.startsWith(prefix)){
      return {input:hash, hashedValue:hashedValue}
    }
    input++;
  }
  
}


const result=findingHashWithprefix("00000")
console.log(`Input ${result.input}`)
console.log(`Hash ${result.hashedValue}`)

/*
output
Input 100xdevs2274885
Hash 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06

*/