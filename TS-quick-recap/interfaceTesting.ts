interface People {
  name:string,
  age:number,
  greet:()=>string
}

let person:People={
  name:"Tridib",
  age:21,
  greet:()=>{
    return "hi"
  }
}

let greeting=person.name
console.log(greeting)