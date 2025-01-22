function identity<T>(arg:T){
  return arg;
}

let output1=identity<string>("My string")

console.log(output1.toUpperCase())
let output2=identity<number>(100)