package Java_Full_Stack.OOPs;


/*
* Inheritance is when properties and methods of base class are passed to a derived class
* */
public class InheritanceDemo {
    public static void main(String[] args) {
        Fish shark=new Fish();
        shark.eat();
    }
}
//Base Class
class Animal{
    String color;

    void eat(){
        System.out.println("eats");
    }

    void breath(){
        System.out.println("Breathes");
    }
}


//Derived class
class Fish extends Animal{
    int fins;
    void swim(){
        System.out.println("Swims in water");
    }
}
