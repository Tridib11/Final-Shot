package Java_Full_Stack.OOPS_Restart;


abstract class vehicle{
    int a;
    public abstract void engine();

    public void print(){
        System.out.println("Hello");
    }
}

public class AbstractTesting extends vehicle {
    @Override
    public void engine() {
        System.out.println("Car engine");
    }
    public static void main(String[] args) {
        vehicle v=new AbstractTesting();

    }
}
