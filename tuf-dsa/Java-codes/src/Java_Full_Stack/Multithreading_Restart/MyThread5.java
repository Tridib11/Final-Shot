package Java_Full_Stack.Multithreading_Restart;
/*
The threads that we create
for using are called User Threads

DAEMON Threads are threads that
run in background
and JVM doesnot wait for them
 */
public class MyThread5 extends Thread {
    MyThread5(String name){
        super(name);
    }
    @Override
    public void run() {
        while(true){
            System.out.println("Thread Running");
        }
    }
    public static void main(String[] args) {
        MyThread5 a=new MyThread5("a");
        a.setDaemon(true);
        a.start();
        System.out.println("Thread Stopped");
    }
}
