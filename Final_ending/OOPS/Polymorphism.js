class Animal {
  speak() {
    console.log("This animal makes sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("The dog barks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("The cat meows");
  }
}

function Communicate(animal) {
  animal.speak();
}
let dog = new Dog();
Communicate(dog);

let animal = new Animal();
Communicate(animal);

let cat = new Cat();
Communicate(cat);
