function greet_Ibject(user:{
  name:string,
  age:number
}){
  console.log("Hello"+user.name)
}

let user={
  name:"Tridib",
  age:21
}

greet_Ibject(user)