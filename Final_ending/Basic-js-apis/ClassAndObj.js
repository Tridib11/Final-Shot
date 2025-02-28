class Animal{
  constructor(name,legCount,speaks){
    this.name=name
    this.legCount=legCount
    this.speaks=speaks
  }
  speak(){
    console.log(`The name of the animal is ${this.name} and it has ${this.legCount} legs and it speaks ${this.speaks}`)
  }
}


let dog=new Animal("Dog",4,"Barks")
dog.speak()