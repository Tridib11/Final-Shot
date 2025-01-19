interface User {
  firstname: string,
  lastName: string,
  age: number,
  email?:string  //optional arguement (Can give it and not give it as well)
 }

function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greet1(user: User) {
  console.log(`Hello ${user.firstname}`)
}

const legalans: boolean = isLegal({
  firstname: "Tridib",
  lastName: "Ghosh",
  age: 22
})

console.log(legalans)