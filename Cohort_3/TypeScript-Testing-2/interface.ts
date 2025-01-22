interface User {
  name: string,
  age: number,
  address: {
    city: string,
    country: string,
    pincode: number
  }
}

let user: User = {
  name: "Tridib",
  age: 21,
  address: {
    city: "Chandigharh",
    country: "India",
    pincode: 603203
  }
}

function isLegal(user: User): boolean {
  if (user.age > 18) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isLegal(user))