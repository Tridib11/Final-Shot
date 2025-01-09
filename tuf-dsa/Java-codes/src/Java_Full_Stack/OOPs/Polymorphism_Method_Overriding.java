package Java_Full_Stack.OOPs;
/*
Method Overiding (Happens at run time )

When a derived class Extends a parent class and we use the derived class(child class)
Object then
the function of the derived class is only called
 */
public class Polymorphism_Method_Overriding {
    public static void main(String[] args) {
        Deer d=new Deer();
        d.eat();
    }
}

class Animalss{
    void eat(){
        System.out.println("Eats anything");
    }
}

class Deer extends Animalss{
    void eat(){
        System.out.println("Eats Grass");
    }
}