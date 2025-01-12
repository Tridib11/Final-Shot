interface UserType{
  firstName:string,
  lastName:string,
  age:number
}

function greetInterface(users:UserType){
  console.log("Hello "+users.firstName)
}


let users:UserType={
  firstName:"Tridib",
  age:21,
  lastName:"Ghosh"
}

greetInterface(users)