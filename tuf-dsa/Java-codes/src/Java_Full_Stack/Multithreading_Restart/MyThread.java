package Java_Full_Stack.Multithreading_Restart;

public class MyThread extends Thread {
    @Override
    public void run() {
        super.run();
    }

    public static void main(String[] args) {
        MyThread t1=new MyThread();
        System.out.println(t1.getState());
    }
}
