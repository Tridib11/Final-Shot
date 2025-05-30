package Java_Full_Stack.OOPs;

/*
Hiding all the unnecessary details and showing only the import parts to the user

- Abstract class
   - Cannot Create an Instance of the Abstract class
   - Can have abstract/Non-Abstract methods
   - Can have constructors


- Interfaces
 */
public class Abstraction_demo {
    public static void main(String[] args) {
        Horse h=new Horse();
        h.eat();
        h.walk();
//        h.changeColor();

        System.out.println(h.color);
    }
}

abstract class AnimalsAbstract{
    String color;

    AnimalsAbstract(){
        color="Brown";
    }

    //Non-Abstract methods
    void eat(){
        System.out.println("Animal eats");
    }
    //abstract methods
    abstract void walk();
}

//sub class

class Horse extends AnimalsAbstract{

    void changeColor(){
        color="Dark Brown";
    }
    void walk(){
        System.out.println("Walks on 4 legs");
    }
}


class Chicken extends AnimalsAbstract{

    void changeColor(){
        color="Yellow";
    }
   void walk(){
       System.out.println("Walks on 2 legs");
   }
}

