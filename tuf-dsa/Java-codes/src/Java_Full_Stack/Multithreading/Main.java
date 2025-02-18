package Java_Full_Stack.Multithreading;

public class Main {
    public static void main(String[] args) {
        World world=new World();
        world.start();
        for(int i=0;i<100;i++){
            System.out.println(Thread.currentThread().getName());
        }
    }
}
