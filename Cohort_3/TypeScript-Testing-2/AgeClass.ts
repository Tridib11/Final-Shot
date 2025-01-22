interface Human{
  name:string,
  age:number,
  isLegal():boolean
}

class Age implements Human{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }

  isLegal(): boolean {
      return this.age>18
  }
}

let person1=new Age("ROhan",21)
console.log(person1.isLegal())