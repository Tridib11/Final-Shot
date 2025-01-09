package Java_Full_Stack.OOPs;

public class MultiLevel_InheritanceDemo {

}

class Animals{
    String color;

    void eat(){
        System.out.println("eats");
    }

    void breath(){
        System.out.println("Breathes");
    }
}

class Mammal extends Animal{
    int legs;
}

class Dog extends Mammal{
    String breed;
}
