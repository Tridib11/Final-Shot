package Java_Full_Stack.OOPS_Restart;


interface Animal{
    void bark();
    default void sleep(){
        System.out.println("Sleeping..........");
    }
}

class Dog implements Animal{
    public void bark(){
        System.out.println("Bark!!!!");
    }

    public void sleep(){
        System.out.println("Sleeping");

    }
}
public class Abstraction_Interface {
    public static void main(String[] args) {

    }
}
