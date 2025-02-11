package Java_Full_Stack.OOPS_Restart;


class Parent{
    void display(){
        System.out.println("This is a parent class");
    }
}

class Child extends Parent{
    void display(){
        System.out.println("This is a child class");
    }
}
public class Casting_Testing {
    public static void main(String[] args) {
        Parent p=new Parent();
        p.display();

        p=(Parent) new Child(); //upcasting
        p.display();

        Child c=(Child)p;//downcasting
        c.display();

    }
}
