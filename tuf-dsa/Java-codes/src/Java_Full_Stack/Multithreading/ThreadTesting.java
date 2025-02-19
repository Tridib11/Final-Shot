package Java_Full_Stack.Multithreading;

public class ThreadTesting extends Thread {

    @Override
    public void run(){

    }
    public static void main(String[] args) {
        ThreadTesting t1=new ThreadTesting();
        System.out.println(t1.getState()); //NEW
        t1.start();
        System.out.println(t1.getState()); //RUNNABLE
    }
}
