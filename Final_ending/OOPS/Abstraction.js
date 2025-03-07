class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting`);
    this.#engineStart();
  }

  #engineStart() {
    console.log("The engine is now running!");
  }
}

const myCar = new Car("Toyota", "Corola");
myCar.start();
