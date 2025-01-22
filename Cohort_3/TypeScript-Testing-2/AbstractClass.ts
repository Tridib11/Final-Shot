abstract class User2{
  name:string
  constructor(name:string){
    this.name=name
  }

  abstract greet():string
  hello(){
    console.log("hi there")
  }
}


class Employee extends User2{
  name:string
  constructor(name:string){
    super(name)
    this.name=name
  }

  greet(){
    return "hi"+this.name
  }
}