interface Users2{
  firstName:string,
  lastName:string,
  age:number
}


function filteredUsers(users:Users2[]){
  return users.filter(x=>x.age>=18)
}


const details:Users2[]=[
  {
    firstName:"Tridib",
    lastName:"Ghosh",
    age:21
  },
  {
    firstName:"Rohan",
    lastName:"Kaur",
    age:22
  },
  {
    firstName:"Rahul",
    lastName:"Kamat",
    age:11
  }
]
console.log(filteredUsers(details))