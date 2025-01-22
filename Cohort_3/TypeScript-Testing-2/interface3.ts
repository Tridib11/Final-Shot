interface People{
  name:string,
  age:number,
  // greet():string
}


class Manager implements People{
  name:string
  age:number

  constructor(name:string,age:number){
    this.name=name
    this.age=age
  }

}


let user1=new Manager("Rohan",24)
console.log(user1.name)