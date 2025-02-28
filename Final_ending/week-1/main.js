const humans=[{
  firstName:"Tridib",
  lastName:"Ghosh",
  age:21
},{
  firstName:"Rohan",
  lastName:"Ghosh",
  age:12
},{
  firstName:"Rahul",
  lastName:"Paul",
  age:45
}]


var count=0;
for(let i=0;i<humans.length;i++){
  if(humans[i].age>=20){
    console.log(humans[i].firstName)
  }
}
