package Java_Full_Stack.OOPS_Restart;

class Animal1 {
    String animal = "All animals";  // Instance variable of Animal1

    // Constructor (default constructor, no need to explicitly define it)
    Animal1() {
        System.out.println("Animal1 Constructor called");
    }

    void getAnimal() {
        System.out.println(animal);  // Print the animal type
    }

    void setAnimal(String animal) {
        this.animal = animal;  // Set the animal type
    }
}

class Dog1 extends Animal1 {
    // Constructor of Dog1
    Dog1() {
        // Calling the superclass constructor using super() explicitly (this is optional)
        super();
        System.out.println("Dog1 Constructor called");
    }

    void print() {
        // Use super to access the superclass's animal variable
        super.animal = "Dog";  // Modifying the superclass variable
        super.getAnimal();  // Calling the superclass's method
        System.out.println(super.animal);  // Display the updated animal value
    }
}

public class Super_testing {
    public static void main(String[] args) {
        // Create an object of Dog1
        Dog1 d = new Dog1();
        d.print();  // Print the dog name and animal type using super

        // Create an object of Animal1
        Animal1 a = new Animal1();
        a.getAnimal();  // Call the getAnimal() method of Animal1 to show the default value
    }
}
