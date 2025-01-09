package Java_Full_Stack.OOPs;

public class MultiLevel_InheritanceDemo {
    public static void main(String[] args) {
        Dog dobby=new Dog();
        dobby.eat();
        dobby.legs=4;
        System.out.println(dobby.legs);
    }
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
