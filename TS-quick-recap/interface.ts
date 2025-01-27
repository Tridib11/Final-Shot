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
  name: "Rohan",
  age: 21,
  address: {
    city: "Chandigarh",
    country: "India",
    pincode: 725431
  }
}

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}


const ans = isLegal(user)
if (ans) {
  console.log("i am legal")
} else {
  console.log("I am illegal")
}
