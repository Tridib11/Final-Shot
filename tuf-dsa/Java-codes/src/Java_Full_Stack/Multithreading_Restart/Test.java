package Java_Full_Stack.Multithreading_Restart;

public class Test {
    public static void main(String[] args) {
        World w=new World();
        w.start();
        for(;;){
            System.out.println(Thread.currentThread().getName());
        }
    }
}
