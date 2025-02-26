package Java_Full_Stack.Multithreading_Restart;

public class MyThread4 extends Thread {
    MyThread4(String name){
        super(name);
    }
    @Override
    public void run() {
        for(int i=1;i<=100;i++){
            System.out.println(Thread.currentThread().getName() + " is Running...");
            Thread.yield();
        }
    }

    public static void main(String[] args) {
        MyThread4 a=new MyThread4("a");
        MyThread4 b=new MyThread4("b");
        a.start();
        b.start();
    }
}
