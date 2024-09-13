let score="33"
console.log(typeof score)

let valueInNumber=Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)



let test="22abc"
console.log(test)

let changeTheType=Number(test)
console.log(changeTheType) //NaN



let bool=true
console.log(bool)

let changeBool=Number(bool)
console.log(changeBool)




console.log("1"+3+3) //133
console.log(1+2+"3") //33


console.log(true) //true
console.log(+true) //1

console.log(null>0)
console.log(null==0)
console.log(null>=0)

// The reason is that an equality check == and comparisons >=, <=,>,<
// work differently.
// Comparisons convert null to a number, treating it as 0. So it gives it as true


console.log("2"==2) //type conversion happens in here

console.log("2"===2) // strictly checks the type of both the datatype