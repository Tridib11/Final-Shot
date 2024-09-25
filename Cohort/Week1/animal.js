class Animal{
  constructor(name,leg,speaks){
    this.name=name
    this.leg=leg
    this.speaks=speaks
  }

  speak(){
    console.log(`${this.name} speaks ${this.speaks}`)
  }
}


let dog=new Animal("Dog","4","Bhow Bhow")
dog.speak()
let cat=new Animal("Cat","4","meow meow")
cat.speak()